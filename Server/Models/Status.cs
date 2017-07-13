using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Server.Models
{
    public class Status
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id {get;set;}
        // Had to rename due to convention requirement by dotnet
        public string Title {get;set;}

        public override string ToString()
        {
            var result = new StringBuilder();
            result.AppendLine($"Status: {Id}, ");
            result.AppendLine($"    Title: {Title}");

            return result.ToString();
        }
    }
}