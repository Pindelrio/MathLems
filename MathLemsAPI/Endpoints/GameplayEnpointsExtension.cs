
using MathLems.Framework.Models;
using MathLemsAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace MathLemsAPI.Endpoints
{
    public static class GameplayEnpointsExtension
    {
        public static void MapGameplayEnpoints(this WebApplication app)
        {
            var scope = app.Services.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            app.MapGet("api/gameplay", async () =>
            {
                return Results.Ok(await context.Gameplays.AsNoTracking().ToListAsync());
            });

            app.MapGet("api/gameplay/{id:guid}", async (Guid id) =>
            {
                var gameplay = await context.Gameplays.AsNoTracking().FirstOrDefaultAsync(a => a.Id == id);
                if (gameplay is null)
                    return Results.NotFound();

                return Results.Ok(gameplay);
            });

            app.MapPost("api/gameplay", async (Gameplay gameplay) =>
            {
                await context.Gameplays.AddAsync(gameplay);
                await context.SaveChangesAsync();
                return Results.Created($"api/gameplay/{gameplay.Id}", gameplay);
            });

            app.MapPut("api/gameplay/{id:guid}", async (Guid id, Gameplay gameplay) =>
            {
                var gameplayModel = await context.Gameplays.FirstOrDefaultAsync(a => a.Id == id);
                if (gameplayModel == null)
                    return Results.NotFound(gameplay);
                
                gameplayModel.Name = gameplay.Name is not null ? gameplay.Name : gameplayModel.Name;

                await context.SaveChangesAsync();

                return Results.NoContent();
            });

            app.MapDelete("api/gameplay/{id:guid}", async (Guid id) =>
            {
                var gameplayModel = await context.Gameplays.FirstOrDefaultAsync(a => a.Id == id);
                if (gameplayModel == null)
                    return Results.NotFound();

                context.Gameplays.Remove(gameplayModel);
                await context.SaveChangesAsync();

                return Results.NoContent();
            });
        }
    }
}
