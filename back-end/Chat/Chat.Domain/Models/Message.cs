using System;

namespace Chat.Domain.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public Guid OwnerId { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}
