using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Server.Models;
using System.Linq;
using Microsoft.AspNetCore.Http;
using System.Net.Http;
using System.Net;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    public class SamplesController : Controller
    {
        private readonly MemoryDatabaseContext _context;
        private List<CompleteSampleView> _cache;

        public SamplesController(MemoryDatabaseContext context)
        {
            _context = context;

            //Load from Files?
        }
        
        [HttpGet]
        public IEnumerable<CompleteSampleView> Get()
        {
            if (!(_cache.Count == 0))
                return _cache;

            // Requirement #1 Output all Samples, their Status, and User that created them
            var result =
                from s in _context.Samples
                join u in _context.Users on s.CreatedBy equals u.Id
                join st in _context.Statuses on s.StatusId equals st.Id
                select new CompleteSampleView(s, st, u);

            // Should buy some performance... and reduces DB calls.
            _cache = result.ToList();

            // This gives us a nice complete view of the Sample in a more human read-able fashion.
            return result;
        }

        [HttpGet("{sampleId}", Name = "GetById")]
        public CompleteSampleView GetById(int sampleId)
        {
            if(sampleId < 0)
                return null;

            var result = Get().Where(s=>s.SampleId == sampleId).FirstOrDefault();
            
            return result;
        }

        [HttpGet("{desiredStatusId}", Name = "GetByStatus")]
        public IEnumerable<CompleteSampleView> GetByStatus(int desiredStatusId)
        {
            // Requirement #2 Output all Samples with a given status
            var list = Get().ToList();

            var result = list.Where(x=> x.StatusId == desiredStatusId);

            return result;
        }

        [HttpGet("{user}", Name = "GetByPartialUser")]
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
        public HttpResponseMessage Create([FromBody] Sample item)
        {
            // Requirement #4 Create a new sample with an associated Status and User. 
            //      Return HTTP OK or Error.
            if(item == null)
                return new HttpResponseMessage(HttpStatusCode.BadRequest);

            var user = _context.Users.Where(u=> u.Id == item.CreatedBy)
                            .FirstOrDefault();
            if(user == null)
                return new HttpResponseMessage(HttpStatusCode.NotFound)
                    {ReasonPhrase = "Unrecognized User."};

            var status = _context.Statuses.Where(st=> st.Id == item.StatusId)
                            .FirstOrDefault();
            if(status == null)
                return new HttpResponseMessage(HttpStatusCode.NotFound)
                    {ReasonPhrase = "Unrecognized Status."};

            _cache.Clear();
            _context.Samples.Add(item);
            _context.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
            
        }
    }
}