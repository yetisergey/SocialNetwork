namespace Domain.Models
{
    public class Interest
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public bool IsDeleted { get; set; }

        public int UserId { get; set; }
        public User User { get; set; } = new User();
    }
}
