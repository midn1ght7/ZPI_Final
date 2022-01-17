using Microsoft.EntityFrameworkCore;
using Kolokwium.Api.Model;

namespace Kolokwium.Api {
    public class ApplicationDbContext : DbContext {
        public DbSet<Author> Authors { get; set; }
        public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options) : base (options) { }

        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder) {
            base.OnConfiguring (optionsBuilder);
        }

        protected override void OnModelCreating (ModelBuilder modelBuilder) {
            base.OnModelCreating (modelBuilder);

            modelBuilder.Entity<Author>(AuthorBuilder => {
                AuthorBuilder.Property(author => author.FirstName).IsRequired();
                AuthorBuilder.Property(author => author.LastName).IsRequired();
            });
            
        }
    }
}