namespace Services.Models.Interests
{
    using Domain.Models;
    public static class InterestMapping
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