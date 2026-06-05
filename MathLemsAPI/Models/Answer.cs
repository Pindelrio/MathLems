namespace MathLems.Framework.Models;

public class Answer
{
    public Guid Id { get; set; }
    public string Content { get; set; } = string.Empty;
    public bool IsCorrect { get; set; }
    public Guid ProblemId { get; set; }
    public Problem Problem { get; set; } = null!;
}
