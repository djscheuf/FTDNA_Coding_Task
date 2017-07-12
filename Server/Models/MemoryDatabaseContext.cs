using Microsoft.EntityFrameworkCore;

namespace Server.Models
{
    public class MemoryDatabaseContext:DbContext
    {
        public MemoryDatabaseContext(DbContextOptions<MemoryDatabaseContext> options) 
         : base(options)
        {}

        public DbSet<Sample> Samples {get;set;}

        // We can use these sets to join additional information 
        //  and should be able to validate requests against them.
        public DbSet<Status> Statuses {get;set;} // Satuses(sp?)

        public DbSet<User> Users {get;set;}
    }    
}