#nullable disable
namespace Domain.Models
{
    public class Interest
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}
