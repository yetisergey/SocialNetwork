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
        Task<List<UserModel>> GetUserFriends(int id, int take, int skip);
        Task<List<UserModel>> SearchFriendsAsync(string search, int take, int skip);
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
            var dbUsers = await _socialNetworkContext.Users.Where(u => (u.FirstName + u.LastName).Contains(search)).ToListAsync();
            var res = dbUsers.Select(u => u.MapToUserModel()).ToList();
            return res;
        }

        public Task<List<UserModel>> GetUserFriends(int id, int take, int skip)
        {
            throw new NotImplementedException();
        }
    }
}
