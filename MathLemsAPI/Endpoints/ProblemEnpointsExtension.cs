using MathLems.Framework.Models;
using MathLemsAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace MathLemsAPI.Endpoints
{
    public static class ProblemEnpointsExtension
    {
        public static void MapProblemEnpoints(this WebApplication app)
        {
            var scope = app.Services.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            app.MapGet("api/problem", async () =>
            {
                return Results.Ok(await context.Problems
                    .Include("Answers")
                    .Include("Question")
                    .AsNoTracking()
                    .ToListAsync());
            });

            app.MapGet("api/problem/{id:guid}", async (Guid id) =>
            {
                var problem = await context.Problems.AsNoTracking().FirstOrDefaultAsync(a => a.Id == id);
                if (problem is null)
                    return Results.NotFound();

                return Results.Ok(problem);
            });

            app.MapPost("api/problem", async (Problem problem) =>
            {
                await context.Problems.AddAsync(problem);
                await context.SaveChangesAsync();
                return Results.Created($"api/problem/{problem.Id}", problem);
            });

            app.MapPut("api/problem/{id:guid}", async (Guid id, Problem problem) =>
            {
                var problemModel = await context.Problems.FirstOrDefaultAsync(a => a.Id == id);
                if (problemModel == null)
                    return Results.NotFound(problem);

                //TODO Map

                await context.SaveChangesAsync();

                return Results.NoContent();
            });

            app.MapDelete("api/problem/{id:guid}", async (Guid id) =>
            {
                var problemModel = await context.Problems.FirstOrDefaultAsync(a => a.Id == id);
                if (problemModel == null)
                    return Results.NotFound();

                context.Problems.Remove(problemModel);
                await context.SaveChangesAsync();

                return Results.NoContent();
            });
        }
    }
}
