namespace Services
{
    using Domain;
    using Domain.Models;
    using Microsoft.EntityFrameworkCore;
    using Services.Models.Interests;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public interface IInterestsService
    {
        Task<List<InterestModel>> GetUserInterestsAsync(int userId);
        Task<InterestModel> AddUserInterestAsync(int userId, string name);
        Task RemoveUserInterestAsync(int userId, int interestId);
    }

    public class InterestsService : IInterestsService
    {
        private readonly ISocialNetworkContext _socialNetworkContext;

        public InterestsService(ISocialNetworkContext socialNetworkContext)
        {
            _socialNetworkContext = socialNetworkContext;
        }

        public async Task<InterestModel> AddUserInterestAsync(int userId, string name)
        {
            var interest = await _socialNetworkContext.Interests.AddAsync(new Interest()
            {
                Name = name,
                UserId = userId
            });

            await _socialNetworkContext.SaveChangesAsync();

            return interest.Entity.MapToInterestModel();
        }

        public async Task<List<InterestModel>> GetUserInterestsAsync(int userId)
        {
            var interests = await _socialNetworkContext.Users
                .Include(u => u.Interests)
                .FirstOrDefaultAsync(u => u.Id == userId);

            return interests.Interests
                .Where(u => !u.IsDeleted)
                .Select(u => u.MapToInterestModel())
                .ToList();
        }

        public async Task RemoveUserInterestAsync(int userId, int interestId)
        {
            var interest = await _socialNetworkContext.Interests
                .FirstOrDefaultAsync(u => u.UserId == userId && u.Id == interestId);

            if (interest != null)
            {
                interest.IsDeleted = true;
                await _socialNetworkContext.SaveChangesAsync();
            }
        }
    }
}