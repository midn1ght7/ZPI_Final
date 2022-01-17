using Microsoft.Extensions.DependencyInjection;
using Kolokwium.Api.Model;

namespace Kolokwium.Api.DAL {
    public static class DbExtensions {
        public static void SeedData (this IServiceCollection serviceCollection) {
            var serviceProvider = serviceCollection.BuildServiceProvider ();
            var dbContext = serviceProvider.GetRequiredService<ApplicationDbContext> ();
            dbContext.AddRange (
                // example of adding in memory data
                new Author () {
                    Id = 1,
                    FirstName = "Henryk",
                    LastName = "Sienkiewicz",
                    Email = "henryk.sienkiewicz@gmail.com"
                },
                new Author () {
                    Id = 2,
                    FirstName = "Wisława",
                    LastName = "Szymborska",
                    Email = "wislawa.szymborska@gmail.com"
                },
                new Author () {
                    Id = 3,
                    FirstName = "Czesław",
                    LastName = "Miłosz",
                    Email = "czeslaw.milosz@gmail.com"
                }
            );
            dbContext.SaveChanges ();
        }
    }
}