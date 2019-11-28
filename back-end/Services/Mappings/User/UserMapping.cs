namespace Services.Mappings.User
{
    using Services.Models.User;
    using Domain.Models;
    public static class UserMapping
    {
        public static UserModel MapToUserModel(this User dbUser)
        {
            return new UserModel()
            {
                Id = dbUser.Id,
                Email = dbUser.Email,
                FirstName = dbUser.FirstName,
                LastName = dbUser.LastName
            };
        }
    }
}
