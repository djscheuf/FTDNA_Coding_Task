using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Server.Models
{
    public class User
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id{get;set;}
        public string FirstName{get;set;}
        public string LastName{get;set;}

        public override string ToString()
        {
            var result = new StringBuilder();
            result.AppendLine($"User: {Id}");
            result.AppendLine($"    FirstName: {FirstName}");
            result.AppendLine($"    LastName:  {LastName}");

            return result.ToString();
        }
    }
}