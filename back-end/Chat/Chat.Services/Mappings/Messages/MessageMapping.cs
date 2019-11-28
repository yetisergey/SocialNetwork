namespace Chat.Services.Mappings.Messages
{
    using Chat.Services.Models.Messages;
    using Chat.Domain.Models;
    public static class MessageMapping
    {
        public static MessageModel ToMessageModel(this Message message)
        {
            return new MessageModel()
            {
                Id = message.Id,
                UserFromId = message.UserFromId,
                CreatedDate = message.CreatedDate,
                UserToId = message.UserToId,
                Text = message.Text
            };
        }
    }
}