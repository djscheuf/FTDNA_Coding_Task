using System;
using System.Text;

namespace Server.Models
{
    public class CompleteSampleView
    {
        public CompleteSampleView(Sample sample,Status status,User user)
        {
            _sample = sample;
            
            _status = status.Title;

            _firstName = user.FirstName;
            _lastName = user.LastName;
        }
        
        private Sample _sample;

        public int SampleId
        {
            get{return _sample.Id;}
        }

        public string Barcode
        {
            get{return _sample.Barcode;}
        }

        public DateTime CreatedAt 
        {
            get{return _sample.CreatedAt;}
        }

        //Should correspond to UserId;
        public int CreatedBy
        {
            get{return _sample.CreatedBy;}
        }

        private string _firstName;
        public string FirstName{get{return _firstName;}}

        private string _lastName;
        public string LastName{get{return _lastName;}}

        // Corresponds to StatusId, though oddly names.
        public int StatusId 
        {
            get{return _sample.StatusId;}
        }
       
        private string _status;
        public string Status {get{return _status;}}

        public override string ToString()
        {
            var result = new StringBuilder();
            result.AppendLine($"Sample: {SampleId}");
            result.AppendLine($"    Barcode:   {Barcode}");
            result.AppendLine($"    CreatedAt: {CreatedAt}");
            result.AppendLine($"    CreatedAt: {CreatedAt}");
            result.AppendLine($"    CreatedBy: {CreatedBy}");
            result.AppendLine($"        FirstName: {FirstName}");
            result.AppendLine($"        LastName:  {LastName} ");
            result.AppendLine($"    Status:    {StatusId} ");
            result.AppendLine($"        Title:     {Status} ");

            return result.ToString();
        }
    }
}