namespace MathLems.Framework.Models;

public class Problem
{
    public Guid Id { get; set; }
    public string Statement { get; set; } = string.Empty;
    public string? Operation { get; set; }
    public Guid GamePlayId { get; set; }
    public Gameplay Gameplay { get; set; } = null!;
    public Guid LanguageId { get; set; }
    public Language Language { get; set; } = null!;
    public Guid LevelId { get; set; }
    public Level Level { get; set; } = null!;
    public Guid QuestionId { get; set; }
    public Question Question { get; set; } = null!;
    public ICollection<Answer> Answers { get; set; } = [];
}
