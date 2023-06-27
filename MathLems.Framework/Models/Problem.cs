namespace MathLems.Framework.Models
{
    public class Problem
    {
        public Guid Id { get; set; }
        public string Statement { get; set; } = null!;
        public string? Operation { get; set; }
        public Question Question { get; set; } = null!;
        public Guid QuestionId { get; set; }
        public Guid LevelId { get; set; }
        public Guid GamePlayId { get; set; }
        public Guid LanguageId { get; set; }
        public ICollection<Answer> Answers { get; set; } = new List<Answer>();
    }
}
