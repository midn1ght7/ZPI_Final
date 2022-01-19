using Microsoft.Extensions.DependencyInjection;
using Kolokwium.Api.Models;

namespace Kolokwium.Api.DAL {
    public static class DbExtensions {
        public static void SeedData (this IServiceCollection serviceCollection) {
            var serviceProvider = serviceCollection.BuildServiceProvider ();
            var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext> ();
            dbContext.AddRange (
                new Student () {
                    Id = 1,
                    FirstName = "Patrycja",
                    LastName = "Adamczyk",
                    Age = 23
                },
                new Student () {
                    Id = 2,
                    FirstName = "Robert",
                    LastName = "Bubica",
                    Age = 21
                },
                new Student (){
                    Id = 3,
                    FirstName = "Adam",
                    LastName = "Małysz",
                    Age = 20
                }
            );
            dbContext.SaveChanges ();
        }
    }
}