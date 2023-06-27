
using MathLems.Framework.Models;
using MathLemsAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyModel.Resolution;

namespace MathLemsAPI.Endpoints
{
    public static class AnswerEnpointsExtension
    {

        
        public static void MapAnswerEnpoints(this WebApplication app)
        {
            var scope = app.Services.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            app.MapGet("api/answer", async () =>
            {
                return Results.Ok(await context.Answers.AsNoTracking().ToListAsync());
            });

            app.MapGet("api/answer/{id:guid}", async (Guid id) =>
            {
                var answer = await context.Answers.AsNoTracking().FirstOrDefaultAsync(a => a.Id == id);
                if (answer is null)
                    return Results.NotFound();

                return Results.Ok(answer);
            });

            app.MapPost("api/answer", async (Answer answer) =>
            {
                await context.Answers.AddAsync(answer);
                await context.SaveChangesAsync();
                return Results.Created($"api/answer/{answer.Id}", answer);
            });

            app.MapPut("api/anwser/{id:guid}", async (Guid id, Answer answer) =>
            {
                var answerModel = await context.Answers.FirstOrDefaultAsync(a => a.Id == id);
                if (answerModel == null)
                    return Results.NotFound(answer);
                
                answerModel.Content = answer.Content is not null ? answer.Content : answerModel.Content;
                answerModel.IsCorrect = answer.IsCorrect;

                await context.SaveChangesAsync();

                return Results.NoContent();
            });

            app.MapDelete("api/answer/{id:guid}", async (Guid id) =>
            {
                var answerModel = await context.Answers.FirstOrDefaultAsync(a => a.Id == id);
                if (answerModel == null)
                    return Results.NotFound();

                context.Answers.Remove(answerModel);
                await context.SaveChangesAsync();

                return Results.NoContent();
            });
        }
    }
}
