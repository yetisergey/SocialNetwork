namespace Web.Mappings.User
{
    using Services.Models.User;
    using Web.Models.User;
    public static class UserMapping
    {
        public static UserResponse ToUserResponse(this UserModel userModel)
        {
            return new UserResponse()
            {
                Id = userModel.Id,
                Email = userModel.Email,
                FirstName = userModel.FirstName,
                LastName = userModel.LastName
            };
        }
    }
}