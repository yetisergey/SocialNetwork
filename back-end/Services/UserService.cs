namespace Services
{
    using Domain;
    using Domain.Models;
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
        Task<UserModel?> GetUserAsync(string email, string password);
        Task<UserModel> RegisterUser(UserRegisterModel userRegisterModel);
        Task UpdateUser(int id, UserUpdateModel userModel);
        Task DeleteUser(int id);
    }

    public class UserService : IUserService
    {
        private readonly ISocialNetworkContext _socialNetworkContext;

        public UserService(ISocialNetworkContext socialNetworkContext)
        {
            _socialNetworkContext = socialNetworkContext;
        }

        public async Task DeleteUser(int id)
        {
            var dbUser = await _socialNetworkContext.Users.FirstOrDefaultAsync(u => u.Id == id);
            dbUser.IsDeleted = true;
            await _socialNetworkContext.SaveChangesAsync();
        }

        public async Task<UserModel> GetUserAsync(int id)
        {
            var dbUser = await _socialNetworkContext.Users.FirstOrDefaultAsync(u => u.Id == id);
            return dbUser.MapToUserModel();
        }

        public async Task<UserModel?> GetUserAsync(string email, string password)
        {
            var passwordHash = GetGuidFromPassword(password);
            var dbUser = await _socialNetworkContext.Users
                .FirstOrDefaultAsync(u => u.Email == email && u.Password == passwordHash.ToString());

            if (dbUser == null)
            {
                return null;
            }
            else
            {
                return dbUser.MapToUserModel();
            }
        }

        public async Task<UserModel> RegisterUser(UserRegisterModel userRegisterModel)
        {
            var password = GetGuidFromPassword(userRegisterModel.Password);
            var userEntity = await _socialNetworkContext.Users.AddAsync(new User
            {
                Email = userRegisterModel.Email,
                FirstName = userRegisterModel.FirstName,
                LastName = userRegisterModel.LastName,
                Password = password.ToString()
            });
            await _socialNetworkContext.SaveChangesAsync();
            return userEntity.Entity.MapToUserModel();
        }

        public async Task UpdateUser(int id, UserUpdateModel userModel)
        {
            var user = await GetUserAsync(id);

            //todo: automapper
            if (!string.IsNullOrEmpty(userModel.Email))
            {
                user.Email = userModel.Email;
            }
            else if (!string.IsNullOrEmpty(userModel.FirstName))
            {
                user.FirstName = userModel.FirstName;
            }
            else if (!string.IsNullOrEmpty(userModel.LastName))
            {
                user.LastName = userModel.LastName;
            }

            _socialNetworkContext.Update(user);
            await _socialNetworkContext.SaveChangesAsync();
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
