namespace Services
{
    using Domain;
    using Microsoft.EntityFrameworkCore;
    using Mappings.User;
    using Models.User;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public interface IFriendService
    {
        Task<List<UserModel>> SearchFriendsAsync(string search, int take, int skip);
        Task<List<UserModel>> GetUserFriendsAsync(int userId);
        Task AddUserToFriendsAsync(int userId, int friendId);
    }

    public class FriendService : IFriendService
    {
        private readonly ISocialNetworkContext _socialNetworkContext;

        public FriendService(ISocialNetworkContext socialNetworkContext)
        {
            _socialNetworkContext = socialNetworkContext;
        }

        public async Task<List<UserModel>> SearchFriendsAsync(string search = "", int take = 50, int skip = 0)
        {
            var dbUsers = await _socialNetworkContext.Users
                .Where(u => (u.FirstName + u.LastName).Contains(search))
                                 .Skip(skip)
                                 .Take(take)
                                 .ToListAsync();
            return dbUsers.Select(dbUser => dbUser.MapToUserModel()).ToList();
        }

        public async Task<List<UserModel>> GetUserFriendsAsync(int userId)
        {
            var userFrindsModels = (await _socialNetworkContext.Users
                .Include(u => u.Friends)
                .FirstOrDefaultAsync(u => u.Id == userId))
                .Friends;

            return userFrindsModels.Select(u => u.MapToUserModel()).ToList();
        }

        public async Task AddUserToFriendsAsync(int userId, int friendId)
        {
            var user = await _socialNetworkContext.Users
                .Include(u => u.Friends)
                .FirstOrDefaultAsync(u => u.Id == userId);

            var friend = await _socialNetworkContext.Users
                .Include(u => u.Friends)
                .FirstOrDefaultAsync(u => u.Id == friendId);

            user.Friends.Add(friend);

            await _socialNetworkContext.SaveChangesAsync();
        }
    }
}
