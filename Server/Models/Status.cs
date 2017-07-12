namespace Server.Models
{
    public class Status
    {
        public int Id {get;set;}
        // This property is oddly named... Status.Status?
        // However I hesitate to rename it in order to avoid drift from the Database Model.
        public string Statuc {get;set;}
    }
}