using Microsoft.Owin.Security.Cookies;
using Okta.AspNet;
using Microsoft.Owin.Security.OpenIdConnect;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Security.Claims;
using EmployeeDepartmentsWebApi.Models;

namespace EmployeeDepartmentsWebApi.Controllers
{  
   
    public class AccountController : ApiController
    {

        [Route("api/account/Savesresponse")]
        [HttpPost]
        public object Savesresponse(User user)
        {   
            return user;
           /* try
            {
                EmployeeDBContext db = new EmployeeDBContext();
                SocialLogin Social = new SocialLogin();
                if (Social.TId == 0)
                {
                    Social.name = user.name;
                    Social.email = user.email;
                    Social.provideid = user.provideid;
                    Social.provider = user.provider;
                    Social.token = user.token;
                    Social.idToken = user.idToken;
                    var a = db.Users.Add(user);
                    db.SaveChanges();
                    return a;
                }
            }
            catch (Exception)
            {
                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };*/
        }


        [Authorize]
        [HttpGet]
        [Route("~/api/messages")]
        public IHttpActionResult Get()
        {
            var principal = RequestContext.Principal.Identity as ClaimsIdentity;

            var login = principal.Claims
                .SingleOrDefault(c => c.Type == System.IdentityModel.Claims.ClaimTypes.NameIdentifier)
                ?.Value;

            return Json(new
            {
                messages = new dynamic[]
                {
                new { date = DateTime.Now, text = "I am a Robot." },
                new { date = DateTime.Now, text = "Hello, world!" },
                },
            });
        }


        public HttpResponseMessage Login()
        {
            if (!HttpContext.Current.User.Identity.IsAuthenticated)
            {
                System.Web.HttpContext.Current.GetOwinContext().Authentication.Challenge(
                    OktaDefaults.MvcAuthenticationType);
                return Request.CreateResponse(HttpStatusCode.OK, "Logged In successfully");
            }

            return Request.CreateErrorResponse(HttpStatusCode.Unauthorized, "You are not authorized");
        }

        public HttpResponseMessage Logout()
        {
            if (!HttpContext.Current.User.Identity.IsAuthenticated)
            {
                System.Web.HttpContext.Current.GetOwinContext().Authentication.SignOut(
                CookieAuthenticationDefaults.AuthenticationType,
                OktaDefaults.MvcAuthenticationType);
            }

            return Request.CreateErrorResponse(HttpStatusCode.OK, "Logged Out successfully");
        }

        public HttpResponseMessage PostLogout()
        {
            return Request.CreateErrorResponse(HttpStatusCode.OK, "welcome on home page,postlogout");
        }

    }
}
