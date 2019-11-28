namespace Web.Mappings.Profile
{
    using Services.Models.User;
    using Web.Models.Profile;

    public static class ProfileMapping
    {
        public static UserUpdateModel ToUserUpdateModel(this ProfileRequest profileRequest)
        {
            return new UserUpdateModel()
            {
                Email = profileRequest.Email,
                FirstName = profileRequest.FirstName,
                LastName = profileRequest.LastName
            };
        }
    }
}
