using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Newtonsoft.Json;

namespace Server.Models
{
    public class Sample
    {
        [JsonProperty("id")]
        [Key,DatabaseGenerated(DatabaseGeneratedOption.None)]        
        public int Id{get;set;}

        [JsonProperty("barcode")]
        public string Barcode{get;set;}
        
        [JsonProperty("createAt")]        
        public DateTime CreatedAt {get;set;}

        //Should correspond to UserId;
        [JsonProperty("createBy")]
        public int CreatedBy{get;set;}

        // Corresponds to StatusId, though oddly names.
        [JsonProperty("statusId")]
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

        public static Sample FromJsonString(string input)
        {
            var result = new Sample();

            var properties = input.Split(',');
            foreach(var prop in properties)
            {
                var parts = prop.Split(':');
                var pname = parts[0];
                var pvalue = parts[1];
                AssignProp(pname,pvalue,result);
            }

            return result;
        }

        private static void AssignProp(string pname, string pvalue, Sample result)
        {
            switch(pname)
            {
                case "id": 
                {
                    result.Id = Convert.ToInt32(pvalue);
                    break;
                }
                case "barcode": 
                {
                    result.Barcode = pvalue;
                    break;
                }
                case "statusId": 
                {
                    result.StatusId = Convert.ToInt32(pvalue);
                    break;
                }
                case "createdBy": 
                {
                    result.CreatedBy = Convert.ToInt32(pvalue);
                    break;
                }
                case "createdAt": 
                {
                    result.CreatedAt = Convert.ToDateTime(pvalue);
                    break;
                }
                default:
                {
                    Console.WriteLine("Unable to map property...");
                    Console.WriteLine("Name: {0}, Value: {1}",pname,pvalue);
                    break;
                }
            }
        }
    }
}