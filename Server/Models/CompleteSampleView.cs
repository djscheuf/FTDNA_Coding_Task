using System;

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
    }
}