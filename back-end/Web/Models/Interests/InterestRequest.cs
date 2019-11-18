namespace Web.Models.Interests
{
    using System.ComponentModel.DataAnnotations;
    public class InterestRequest
    {
        [Required]
        public string? Name { get; set; }
    }
}
