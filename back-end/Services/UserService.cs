﻿namespace Services
{
    using Domain;
    using Domain.Models;
    using Mappings.User;
    using Microsoft.EntityFrameworkCore;
    using Services.Models.User;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Cryptography;
    using System.Text;
    using System.Threading.Tasks;

    public interface IUserService
    {
        Task<List<UserModel>> GetUsersAsync(string search, int take, int skip);
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
                .FirstAsync(u => u.Email == email && u.Password == passwordHash.ToString());
            return dbUser.MapToUserModel();
        }

        public async Task<List<UserModel>> GetUsersAsync(string search, int take, int skip)
        {
            var dbUsers = await _socialNetworkContext.Users
                .Where(u => (u.FirstName + u.LastName).Contains(search))
                                 .Skip(skip)
                                 .Take(take)
                                 .ToListAsync();
            return dbUsers.Select(dbUser => dbUser.MapToUserModel()).ToList();
        }

        public async Task<UserModel> RegisterUser(UserRegisterModel userRegisterModel)
        {
            var userEntity = await _socialNetworkContext.Users.AddAsync(new User
            {
                Email = userRegisterModel.Email,
                FirstName = userRegisterModel.FirstName,
                LastName = userRegisterModel.LastName,
                Password = userRegisterModel.Password
            });
            await _socialNetworkContext.SaveChangesAsync();
            return userEntity.Entity.MapToUserModel();
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
