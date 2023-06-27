using System.Reflection.Metadata;

namespace MathLems.Framework.Models
{
    public class Answer
    {
        public Guid Id { get; set; }
        public string Content { get; set; } = null!;
        public bool IsCorrect { get; set; }
        public Guid ProblemId { get; set; }
    }
}
