using Microsoft.EntityFrameworkCore;
using Kolokwium.Api.Models;

namespace Kolokwium.Api {
    public class ApplicationDbContext : DbContext {
        public DbSet<Student> Students { get; set;}
        public ApplicationDbContext (DbContextOptions<ApplicationDbContext> options) : base (options) { }

        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder) {
            base.OnConfiguring (optionsBuilder);
        }

        protected override void OnModelCreating (ModelBuilder modelBuilder) {
            base.OnModelCreating (modelBuilder);
            
            modelBuilder.Entity<Student> (studentBuilder => {
                studentBuilder.Property(student => student.FirstName).IsRequired();
                studentBuilder.Property(student => student.LastName).IsRequired();
                studentBuilder.Property(student => student.Age).IsRequired();
            });
            
        }
    }
}