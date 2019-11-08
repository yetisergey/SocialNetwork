namespace Domain.Models
{
    public class Friend
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }
    }
}
