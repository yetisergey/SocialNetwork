namespace Services.Models.Interests
{
    using Domain.Models;
    public static class InterestMappings
    {
        public static InterestModel MapToInterestModel(this Interest dbUser)
        {
            return new InterestModel()
            {
                Id = dbUser.Id,
                Name = dbUser.Name
            };
        }
    }
}