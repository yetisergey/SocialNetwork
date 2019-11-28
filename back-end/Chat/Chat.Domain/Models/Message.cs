namespace Chat.Domain.Models
{
    using System;
    public class Message
    {
        public int Id { get; set; }
        public string Text { get; set; } = string.Empty;
        public int UserFromId { get; set; }
        public int UserToId { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}