namespace MathLems.Framework.Models;

public class User
{
    public Guid Id { get; set; }
    public string Username { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public Guid SettingsId { get; set; }
}
