
using MathLems.Framework.Models;
using MathLemsAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace MathLemsAPI.Endpoints
{
    public static class LevelEnpointsExtension
    {
        public static void MapLevelEnpoints(this WebApplication app)
        {
            var scope = app.Services.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            app.MapGet("api/level", async ()=>
            {
                return Results.Ok(await context.Levels.AsNoTracking().ToListAsync());
            });

            app.MapGet("api/level/{id:guid}", async (Guid id) =>
            {
                var level = await context.Levels.AsNoTracking().FirstOrDefaultAsync(a => a.Id == id);
                if (level is null)
                    return Results.NotFound();

                return Results.Ok(level);
            });

            app.MapPost("api/level", async (Level level) =>
            {
                await context.Levels.AddAsync(level);
                await context.SaveChangesAsync();
                return Results.Created($"api/level/{level.Id}", level);
            });

            app.MapPut("api/level/{id:guid}", async (Guid id, Level level) =>
            {
                var levelModel = await context.Levels.FirstOrDefaultAsync(a => a.Id == id);
                if (levelModel == null)
                    return Results.NotFound(level);
                
                levelModel.Name = level.Name is not null ? level.Name : levelModel.Name;
                levelModel.Description = level.Description is not null ? level.Description : levelModel.Description;

                await context.SaveChangesAsync();

                return Results.NoContent();
            });

            app.MapDelete("api/level/{id:guid}", async (Guid id) =>
            {
                var levelModel = await context.Levels.FirstOrDefaultAsync(a => a.Id == id);
                if (levelModel == null)
                    return Results.NotFound();

                context.Levels.Remove(levelModel);
                await context.SaveChangesAsync();

                return Results.NoContent();
            });
        }
    }
}
