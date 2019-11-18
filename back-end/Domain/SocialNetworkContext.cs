namespace Domain
{
    using Microsoft.EntityFrameworkCore;
    using Models;
    using System.Reflection;
    using System.Threading.Tasks;

    public interface ISocialNetworkContext
    {
        DbSet<Friend> Friends { get; set; }
        DbSet<Interest> Interests { get; set; }
        DbSet<User> Users { get; set; }
        DbSet<Wall> Walls { get; set; }
        Task SaveChangesAsync();
    }

#nullable disable
    public class SocialNetworkContext : DbContext, ISocialNetworkContext
    {
        public DbSet<Friend> Friends { get; set; }
        public DbSet<Interest> Interests { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Wall> Walls { get; set; }

        public async Task SaveChangesAsync()
        {
            await base.SaveChangesAsync();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Filename=C:\Users\Sergey\Desktop\SocialNetwork.db", options =>
            {
                options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            });
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Friend>()
                .HasKey(bc => new { bc.UserId, bc.UserFriendId });

            modelBuilder.Entity<Friend>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.Friends)
                .HasForeignKey(bc => bc.UserId);

            modelBuilder.Entity<Friend>()
                .HasOne(bc => bc.UserFriend)
                .WithMany(c => c.UserFriends)
                .HasForeignKey(bc => bc.UserFriendId);

            modelBuilder.Entity<User>()
                .HasData(new User()
                {
                    Id = 1,
                    FirstName = "Sergey",
                    LastName = "Maslennikov",
                    Password = "81d0869f-4c88-657d-9a2f-eaa0c55ad015",//test
                    Email = "yetisergey@gmail.com"
                }, new User()
                {
                    Id = 2,
                    FirstName = "Test",
                    LastName = "Test",
                    Password = "81d0869f-4c88-657d-9a2f-eaa0c55ad015",//test
                    Email = "test@mail.com"
                });

            modelBuilder.Entity<Friend>().HasData(new Friend()
            {
                UserId = 1,
                UserFriendId = 2
            });
        }
    }
}
