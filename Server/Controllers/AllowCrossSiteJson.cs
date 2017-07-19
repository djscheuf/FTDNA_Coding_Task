using System.Linq;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Server.Controllers
{
    public class AllowCrossSiteJson : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var headers = Enumerable.ToList(filterContext.HttpContext.Request.Headers.Keys);
            headers.Add("X-HTTP-Method-Override");

            filterContext.HttpContext.Response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            filterContext.HttpContext.Response.Headers.Add("Access-Control-Allow-Headers", string.Join(", ", headers));

            filterContext.HttpContext.Response.Headers.Add("Access-Control-Allow-Origin", "*");

            base.OnActionExecuting(filterContext);
        }
    }

//Taken From https://gist.github.com/michaelcox/1854201, 
//  recommended on StackOverlow to allow same origin calls.
//  And then modified to fit newer standards.
//  ( I think this was written pre ASP.Net5?)
}