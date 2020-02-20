using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EmployeeDepartmentsWebApi.Models
{
    public class User
    {  [Key]
        public string UserName { get; set; }
        public string Email { get; set; }
      //  public string provider { get; set; }
      //  public string provideid { get; set; }
       // public string token { get; set; }
      //  public string idToken { get; set; }
    }
}