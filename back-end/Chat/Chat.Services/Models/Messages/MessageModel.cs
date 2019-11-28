namespace Chat.Services.Models.Messages
{
    using System;
    public class MessageModel
    {
        public int Id { get; set; }
        public string Text { get; set; } = string.Empty;
        public int UserFromId { get; set; }
        public int UserToId { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}