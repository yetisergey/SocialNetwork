#nullable disable
namespace Domain
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.ChangeTracking;
    using Models;
    using System.Reflection;
    using System.Threading;
    using System.Threading.Tasks;

    public interface ISocialNetworkContext
    {
        DbSet<Interest> Interests { get; set; }
        DbSet<User> Users { get; set; }
        DbSet<Wall> Walls { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
        EntityEntry Update(object entity);
    }

    public class SocialNetworkContext : DbContext, ISocialNetworkContext
    {
        public DbSet<Interest> Interests { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Wall> Walls { get; set; }

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

            modelBuilder.Entity<User>()
                .HasMany(bc => bc.Friends);

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
        }
    }
}
