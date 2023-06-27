namespace MathLems.Framework.Models
{
    public class Settings
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public Language Language { get; set; } = null!;
        public Guid LanguageId { get; set; }
        public int Lives { get; set; }
        public Avatar Avatar { get; set; } = null!;
        public Guid AvatarId { get; set; }
        public User User { get; set; } = null!;
    }
}
