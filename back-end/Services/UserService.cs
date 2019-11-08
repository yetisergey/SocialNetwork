namespace Services
{
    using Domain;
    using Mappings.User;
    using Microsoft.EntityFrameworkCore;
    using Services.Models.User;
    using System;
    using System.Linq;
    using System.Security.Cryptography;
    using System.Text;
    using System.Threading.Tasks;

    public interface IUserService
    {
        Task<UserModel> GetUserAsync(int id);
        Task<UserModel> GetUserAsync(string email, string password);
        Task<UserModel> RegisterUser(UserRegisterModel userRegisterModel);
        Task UpdateUser(UserModel userModel);
        Task DeleteUser(int id);
    }

    public class UserService : IUserService
    {
        private readonly ISocialNetworkContext _socialNetworkContext;

        public UserService(ISocialNetworkContext socialNetworkContext)
        {
            _socialNetworkContext = socialNetworkContext;
        }

        public Task DeleteUser(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<UserModel> GetUserAsync(int id)
        {
            var dbUser = await _socialNetworkContext.Users.FirstOrDefaultAsync(u => u.Id == id);
            return dbUser.MapToUserModel();
        }

        public async Task<UserModel> GetUserAsync(string email, string password)
        {
            var passwordHash = GetGuidFromPassword(password);
            var dbUser = await _socialNetworkContext.Users
                .FirstAsync(u => u.Email == email);
                //&& u.Password == passwordHash);
            return dbUser.MapToUserModel();
        }

        public Task<UserModel> RegisterUser(UserRegisterModel userRegisterModel)
        {
            throw new NotImplementedException();
        }

        public Task UpdateUser(UserModel userModel)
        {
            throw new NotImplementedException();
        }

        private Guid GetGuidFromPassword(string password)
        {
            using (SHA256 sha2 = SHA256.Create())
            {
                var hash = sha2.ComputeHash(Encoding.Default.GetBytes(password));
                return new Guid(hash.Take(16).ToArray());
            }
        }
    }
}
