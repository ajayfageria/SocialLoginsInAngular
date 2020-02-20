using System.Collections.Generic;
using System.Configuration;
using Microsoft.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.Google;
using Okta.AspNet;
using Owin;

[assembly: OwinStartup(typeof(EmployeeDepartmentsWebApi.Startup))]

namespace EmployeeDepartmentsWebApi
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {

            /* app.UseOktaWebApi(new OktaWebApiOptions()
             {
                 OktaDomain = ConfigurationManager.AppSettings["okta:nagarrotestnagarro.okta.com"],


             });
             */
            app.SetDefaultSignInAsAuthenticationType(CookieAuthenticationDefaults.AuthenticationType);
            app.UseGoogleAuthentication(new GoogleOAuth2AuthenticationOptions()
            {
                ClientId = "",
                ClientSecret = ""
            });
        }
    }
}

