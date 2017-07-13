using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Server.Models
{
    public class Sample
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id{get;set;}
        public string Barcode{get;set;}
        public DateTime CreatedAt {get;set;}

        //Should correspond to UserId;
        public int CreatedBy{get;set;}

        // Corresponds to StatusId, though oddly names.
        public int StatusId {get;set;}

        public override string ToString()
        {
            var result = new StringBuilder();
            result.AppendLine($"Sample: {Id}");
            result.AppendLine($"    Barcode:   {Barcode}");
            result.AppendLine($"    CreatedAt: {CreatedAt}");
            result.AppendLine($"    CreatedBy: {CreatedBy}");
            result.AppendLine($"    Status:    {StatusId}");

            return result.ToString();
        }

    }
}