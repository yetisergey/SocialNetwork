namespace Domain
{
    using Microsoft.EntityFrameworkCore;
    using Models;
    using System;
    using System.Reflection;

    public interface ISocialNetworkContext
    {
        DbSet<Friend> Friends { get; set; }
        DbSet<Interest> Interests { get; set; }
        DbSet<User> Users { get; set; }
        DbSet<Wall> Walls { get; set; }
    }

    public class SocialNetworkContext : DbContext, ISocialNetworkContext
    {
        public DbSet<Friend> Friends { get; set; }
        public DbSet<Interest> Interests { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Wall> Walls { get; set; }

        public SocialNetworkContext()
        {
            Database.Migrate();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Filename=C:\Users\Sergey\Desktop\SocialNetwork.db", options =>
            {
                options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            });
        }
    }
}
