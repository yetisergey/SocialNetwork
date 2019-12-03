#nullable disable
namespace Chat.Domain
{
    using Microsoft.EntityFrameworkCore;
    using Models;
    using System.Reflection;
    using System.Threading;
    using System.Threading.Tasks;

    public interface IChatContext
    {
        public DbSet<Message> Messages { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }

    public class ChatContext : DbContext, IChatContext
    {
        public DbSet<Message> Messages { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Filename=C:\Users\Sergey\Desktop\SocialNetwork.Chat.db", options =>
            {
                options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            });
        }
    }
}
