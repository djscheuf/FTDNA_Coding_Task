using System;
using System.Collections.Generic;
using System.Linq;
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

        private IEnumerable<CompleteSampleView> _cache;

        public IEnumerable<CompleteSampleView> GetFullSampleView()
        {
            if(_cache !=null)
                return _cache;

            var result = new List<CompleteSampleView>();
            foreach(var s in Samples)
            {
                var u = Users.Where(user=>user.Id == s.CreatedBy).FirstOrDefault();
                var st = Statuses.Where(stat=> stat.Id==s.StatusId).FirstOrDefault();

                if(u==null || st == null)
                {
                    Console.WriteLine("Sample couldn't tie to User or Status:");
                    Console.WriteLine(s);
                    continue;
                }

                var view = new CompleteSampleView(s,st,u);
                result.Add(view);
            }

            _cache = result;
            return result;

            // The above is effectively:
            // from s in _context.Samples
                // join u in _context.Users on s.CreatedBy equals u.Id
                // join st in _context.Statuses on s.StatusId equals st.Id
                // select new CompleteSampleView(s, st, u);

            // But the SQL-like linq above throws and Reflection Exception when you try to use it. 
            //  Working software wins out.
        }

        public override int SaveChanges()
        {
            _cache= null;
            return base.SaveChanges();
        }
    }    
}