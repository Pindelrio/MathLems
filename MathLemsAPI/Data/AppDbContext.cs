using MathLems.Framework.Models;
using Microsoft.EntityFrameworkCore;

namespace MathLemsAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.AddDataSeed();
        }
        public DbSet<Answer> Answers => Set<Answer>();
        public DbSet<Avatar> Avatars => Set<Avatar>();
        public DbSet<Gameplay> Gameplays => Set<Gameplay>();
        public DbSet<Language> Languages => Set<Language>();
        public DbSet<Level> Levels => Set<Level>();
        public DbSet<Problem> Problems => Set<Problem>();
        public DbSet<Question> Questions => Set<Question>();
        public DbSet<Settings> Settings => Set<Settings>();
        public DbSet<User> Users => Set<User>();
    }
}
