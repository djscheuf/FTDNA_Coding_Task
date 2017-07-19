using System;
using System.Linq;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Server.Models
{    
    public static class ContextExtensions
    {
        private static void ParseAndLoadIntoContext(MemoryDatabaseContext context, string[] source, Action<string[]> updateAction)
        {
            var cnt = source.Length;

            // skip first.
            for (var i = 1; i < cnt; i++)
            {
                var tokens = source[i].Split(',');
                updateAction(tokens);
            }

            context.SaveChanges();
        }

        public static void LoadStatuses(this MemoryDatabaseContext context, string[] source)
        {
            Console.WriteLine("Loading Status");
            ParseAndLoadIntoContext(context, source, 
                (string[] tokens)=> 
                {
                    context.Statuses.Add
                    (
                        new Status
                        {
                            Id = Convert.ToInt32(tokens[0]),
                            Title = tokens[1]
                        }
                    );
                }
            );
            Console.WriteLine(context.Statuses.First());
        }

        public static void LoadUsers(this MemoryDatabaseContext context, string[] source)
        {
            Console.WriteLine("Loading Users");
            ParseAndLoadIntoContext(context, source, 
                (string[] tokens)=> 
                {
                    context.Users.Add(
                        new User
                        {
                            Id = Convert.ToInt32(tokens[0]),
                            FirstName = tokens[1],
                            LastName = tokens[2]
                        }
                    );
                }
            );
            Console.WriteLine(context.Users.First());
        }

        public static void LoadSamples(this MemoryDatabaseContext context, string[] source)
        {
            Console.WriteLine("Loading Samples");
            ParseAndLoadIntoContext(context, source, 
                (string[] tokens)=> 
                {
                    context.Samples.Add(
                        new Sample
                        {
                            Id = Convert.ToInt32(tokens[0]),
                            Barcode = tokens[1],
                            CreatedAt = Convert.ToDateTime(tokens[2]),
                            CreatedBy = Convert.ToInt32(tokens[3]),
                            StatusId = Convert.ToInt32(tokens[4])
                        }
                    );
                }
            );
            Console.WriteLine(context.Samples.First());
        }
    }
}