using System;

namespace Server.Models
{
    public class Sample
    {
        public int Id{get;set;}
        public string Barcode{get;set;}
        public DateTime CreatedAt {get;set;}

        //Should correspond to UserId;
        public int CreatedBy{get;set;}

        // Corresponds to StatusId, though oddly names.
        public int StatusId {get;set;}

    }
}