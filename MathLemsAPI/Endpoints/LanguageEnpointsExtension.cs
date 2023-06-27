
using MathLems.Framework.Models;
using MathLemsAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace MathLemsAPI.Endpoints
{
    public static class LanguageEnpointsExtension
    {
        public static void MapLanguageEnpoints(this WebApplication app)
        {
            var scope = app.Services.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
            
            app.MapGet("api/language", async () =>
            {
                return Results.Ok(await context.Languages.AsNoTracking().ToListAsync());
            });

            app.MapGet("api/language/{id:guid}", async (Guid id) =>
            {
                var language = await context.Languages.AsNoTracking().FirstOrDefaultAsync(a => a.Id == id);
                if (language is null)
                    return Results.NotFound();

                return Results.Ok(language);
            });

            app.MapPost("api/language", async (Language language) =>
            {
                await context.Languages.AddAsync(language);
                await context.SaveChangesAsync();
                return Results.Created($"api/language/{language.Id}", language);
            });

            app.MapPut("api/language/{id:guid}", async (Guid id, Language language) =>
            {
                var languageModel = await context.Languages.FirstOrDefaultAsync(a => a.Id == id);
                if (languageModel == null)
                    return Results.NotFound(language);
                
                languageModel.IsoCode = language.IsoCode is not null ? language.IsoCode : languageModel.IsoCode;
                languageModel.Name = language.Name is not null ? language.Name : languageModel.Name;
                languageModel.Flag = language.Flag is not null ? language.Flag : languageModel.Flag;

                await context.SaveChangesAsync();

                return Results.NoContent();
            });

            app.MapDelete("api/language/{id:guid}", async (Guid id) =>
            {
                var languageModel = await context.Languages.FirstOrDefaultAsync(a => a.Id == id);
                if (languageModel == null)
                    return Results.NotFound();

                context.Languages.Remove(languageModel);
                await context.SaveChangesAsync();

                return Results.NoContent();
            });
        }
    }
}
