namespace MathLems.Framework.Models;

public class Language
{
    public Guid Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string IsoCode { get; set; } = string.Empty;
    public string? Flag { get; set; }
}
