using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Server.Models;
using System.Linq;
using Microsoft.AspNetCore.Http;
using System.Net.Http;
using System.Net;
using System.IO;
using System;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    public class SamplesController : Controller
    {
        private readonly MemoryDatabaseContext _context;
        private List<CompleteSampleView> _cache = new List<CompleteSampleView>();

        public SamplesController(MemoryDatabaseContext context)
        {
            _context = context;

            //Load from Files?
            if(_context.Samples.Count() == 0)
            {
                #region Linx Loading
                context.LoadStatuses(System.IO.File.ReadAllLines("./Data/Statuses.txt"));
                context.LoadUsers(System.IO.File.ReadAllLines("./Data/Users.txt"));
                context.LoadSamples(System.IO.File.ReadAllLines("./Data/Samples.txt"));
                #endregion
                #region Windows Loading
                /*
                context.LoadStatuses(System.IO.File.ReadAllLines(".\\Data\\Statuses.txt"));
                context.LoadUsers(System.IO.File.ReadAllLines(".\\Data\\Users.txt"));
                context.LoadSamples(System.IO.File.ReadAllLines(".\\Data\\Samples.txt"));
                */
                #endregion
            }
        }
        
        [HttpGet]
        public IEnumerable<CompleteSampleView> Get()
        {
            // Requirement #1 Output all Samples, their Status, and User that created them
            var result =_context.GetFullSampleView();

            // This gives us a nice complete view of the Sample in a more human read-able fashion.
            return result;
        }

        [HttpGet("GetById/{sampleId}", Name = "GetById")]
        public CompleteSampleView GetById(int sampleId)
        {
            if(sampleId < 0)
                return null;

            var result = Get().Where(s=>s.SampleId == sampleId).FirstOrDefault();
            
            return result;
        }

        [HttpGet("GetByStatus/{desiredStatusId}", Name = "GetByStatus")]
        public IEnumerable<CompleteSampleView> GetByStatus(int desiredStatusId)
        {
            // Requirement #2 Output all Samples with a given status
            var list = Get().ToList();

            var result = list.Where(x=> x.StatusId == desiredStatusId);

            return result;
        }

        [HttpGet("GetByUser/{user}", Name = "GetByPartialUser")]
        public IEnumerable<CompleteSampleView> GetByPartialUser(string user)
        {
            // Requirement #3 Output all Samples whose usersnames contain a given string
            var list = Get().ToList();

            var result = list.Where(x=> x.FirstName.Contains(user) || x.LastName.Contains(user));

            return result;
        }

        //Effectively only a Create, but no Update or Delete. 
        //     Thankfully that means it is a simple project.
        [HttpPost]
        public HttpResponseMessage Create([FromBody]Sample item)
        {
            // Requirement #4 Create a new sample with an associated Status and User. 
            //      Return HTTP OK or Error.
            Console.WriteLine("Received New Sample:");
            
            if(item == null)
            {
                Console.WriteLine("Sample was null...");
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }

            Console.WriteLine(item);
            var sample = item;//Sample.FromJsonString((item as string));

            var user = _context.Users.Where(u=> u.Id == sample.CreatedBy)
                            .FirstOrDefault();
            if(user == null)
            {
                Console.WriteLine("Sample had a bad user...");
                return new HttpResponseMessage(HttpStatusCode.NotFound)
                    {ReasonPhrase = "Unrecognized User."};
            }

            var status = _context.Statuses.Where(st=> st.Id == sample.StatusId)
                            .FirstOrDefault();
            if(status == null)
            {
                Console.WriteLine("Sample had a bad status...");
                return new HttpResponseMessage(HttpStatusCode.NotFound)
                    {ReasonPhrase = "Unrecognized Status."};
            }

            try
            {
                _context.Samples.Add(sample);
                _context.SaveChanges();
            }
            catch(Exception ex)
            {
                Console.WriteLine("Exception thrown in saveChanges");
                Console.WriteLine(ex.Message);
                _context.Samples.Remove(sample);
                return new HttpResponseMessage(HttpStatusCode.Conflict)
                    {ReasonPhrase=ex.Message};
            }
            

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}