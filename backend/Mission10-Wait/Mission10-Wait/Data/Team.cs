using System.ComponentModel.DataAnnotations;

namespace Mission10_Wait.Data;

public class Team
{
    [Key]
    public int TeamID { get; set; }
    [Required]
    public string TeamName { get; set; }
}