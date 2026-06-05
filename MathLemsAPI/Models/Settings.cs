namespace MathLems.Framework.Models;

public class Settings
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int Lives { get; set; }
    public Guid AvatarId { get; set; }
    public Avatar Avatar { get; set; } = null!;
    public Guid LanguageId { get; set; }
    public Language Language { get; set; } = null!;
    public User User { get; set; } = null!;
}
