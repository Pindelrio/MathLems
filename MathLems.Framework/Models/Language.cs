using System.ComponentModel.DataAnnotations;

namespace MathLems.Framework.Models
{
    public class Language
    {
        public Guid Id { get; set; }

        [StringLength(2)]
        public string IsoCode { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string? Flag { get; set; }
    }
}
