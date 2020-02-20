using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EmployeeDepartmentsWebApi.Models
{
    public class Response
    {[Key]
        public string Status { set; get; }
        public string Message { set; get; }
    }
}