using MathLems.Framework.Models;
using Microsoft.EntityFrameworkCore;

namespace MathLemsAPI.Data
{
    internal static class ModelCreationExtension
    {
        public static void AddDataSeed(this ModelBuilder modelBuilder)
        {
            var languageEntity = modelBuilder.Entity<Language>();
            languageEntity.HasData(
                new Language
                {
                    Id = Guid.NewGuid(),
                    Name = "Català",
                    IsoCode = "ca"
                },
                new Language
                {
                    Id = Guid.NewGuid(),
                    Name = "English",
                    IsoCode = "en"
                },
                new Language
                {
                    Id = Guid.NewGuid(),
                    Name = "Español",
                    IsoCode = "es"
                }
            );

            var levelEntity = modelBuilder.Entity<Level>();
            levelEntity.HasData(
                new Level
                {
                    Id = Guid.NewGuid(),
                    Name = "Level 1",
                    Description = "Easy"
                },
                new Level
                {
                    Id = Guid.NewGuid(),
                    Name = "Level 2",
                    Description = "Medium"
                },
                new Level
                {
                    Id = Guid.NewGuid(),
                    Name = "Level 3",
                    Description = "Hard"
                });

            var gameplayEntity = modelBuilder.Entity<Gameplay>();
            gameplayEntity.HasData(
                new Gameplay {
                    Id = Guid.NewGuid(),
                    Name = "Suma" 
                });

            var questionEntity = modelBuilder.Entity<Question>();
            questionEntity.HasData(
                new Question
                {
                    Id = Guid.NewGuid(),
                    Name = "Què és el que et demana el problema?"
                });

        }
    }
}
