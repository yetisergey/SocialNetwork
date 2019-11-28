namespace Web.Mappings.Interests
{
    using Services.Models.Interests;
    using Web.Models.Interests;
    public static class InterestMapping
    {
        public static InterestResponse ToInterestResponse(this InterestModel interestModel)
        {
            return new InterestResponse()
            {
                Id = interestModel.Id,
                Name = interestModel.Name
            };
        }
    }
}