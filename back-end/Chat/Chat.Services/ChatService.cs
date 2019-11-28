namespace Chat.Services
{
    using Chat.Domain;
    using Chat.Domain.Models;
    using Mappings.Messages;
    using Microsoft.EntityFrameworkCore;
    using Models.Messages;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public interface IChatService
    {
        Task<List<MessageModel>> GetMessages(int userFromId, int userToId);
        Task<MessageModel> AddMessage(int userFromId, int userToId, string message);
    }

    public class ChatService : IChatService
    {
        private readonly IChatContext _chatContext;

        public ChatService(IChatContext chatContext)
        {
            _chatContext = chatContext;
        }

        public async Task<MessageModel> AddMessage(int userFromId, int userToId, string message)
        {
            var msg = await _chatContext.Messages.AddAsync(new Message()
            {
                Text = message,
                CreatedDate = DateTime.UtcNow,
                UserFromId = userFromId,
                UserToId = userToId
            });
            await _chatContext.SaveChangesAsync();
            return msg.Entity.ToMessageModel();
        }

        public Task<List<MessageModel>> GetMessages(int userFromId, int userToId)
        {
            return _chatContext.Messages
                .Where(u => u.UserFromId == userFromId)
                .Where(u => u.UserToId == userToId)
                .OrderBy(u => u.CreatedDate)
                .Select(u => u.ToMessageModel())
                .ToListAsync();
        }
    }
}