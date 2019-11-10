namespace Chat.Domain
{
    using Microsoft.EntityFrameworkCore;
    using Models;

#nullable disable
    public class ChatContext : DbContext
    {
        public DbSet<Message> Messages { get; set; }
    }
}
