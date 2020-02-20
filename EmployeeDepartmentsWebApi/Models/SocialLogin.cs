using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeDepartmentsWebApi.Models
{
    public class SocialLogin
    {
        public string name { get; set; }
        public string email { get; set; }
        public string provider { get; set; }
        public string provideid { get; set; }
        public string token { get; set; }
        public string idToken { get; set; }
      //  public int TId { get; internal set; }
    }
}