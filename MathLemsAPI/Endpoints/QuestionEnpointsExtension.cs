
using MathLems.Framework.Models;
using MathLemsAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace MathLemsAPI.Endpoints
{
    public static class QuestionEnpointsExtension
    {
        public static void MapQuestionEnpoints(this WebApplication app)
        {
            var scope = app.Services.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            app.MapGet("api/question", async () =>
            {
                return Results.Ok(await context.Questions.AsNoTracking().ToListAsync());
            });

            app.MapGet("api/question/{id:guid}", async (Guid id) =>
            {
                var question = await context.Questions.AsNoTracking().FirstOrDefaultAsync(a => a.Id == id);
                if (question is null)
                    return Results.NotFound();

                return Results.Ok(question);
            });

            app.MapPost("api/question", async (Question question) =>
            {
                await context.Questions.AddAsync(question);
                await context.SaveChangesAsync();
                return Results.Created($"api/question/{question.Id}", question);
            });

            app.MapPut("api/question/{id:guid}", async (Guid id, Question question) =>
            {
                var questionModel = await context.Questions.FirstOrDefaultAsync(a => a.Id == id);
                if (questionModel == null)
                    return Results.NotFound(question);
                
                questionModel.Name = question.Name is not null ? question.Name : questionModel.Name;

                await context.SaveChangesAsync();

                return Results.NoContent();
            });

            app.MapDelete("api/question/{id:guid}", async (Guid id) =>
            {
                var questionModel = await context.Questions.FirstOrDefaultAsync(a => a.Id == id);
                if (questionModel == null)
                    return Results.NotFound();

                context.Questions.Remove(questionModel);
                await context.SaveChangesAsync();

                return Results.NoContent();
            });
        }
    }
}
