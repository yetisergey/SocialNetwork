#nullable disable
namespace Domain.Models
{
    public class Friend
    {
        public int UserId { get; set; }

        public virtual User User { get; set; }

        public int UserFriendId { get; set; }

        public virtual User UserFriend { get; set; }
    }
}
