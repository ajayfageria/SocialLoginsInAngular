using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeDepartmentsWebApi.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public HttpResponseMessage Get()
        {
            DataTable datatable = new DataTable();
            datatable.Columns.Add("DepId");
            datatable.Columns.Add("DepName");

            datatable.Rows.Add("1", "IT");
            datatable.Rows.Add("2", "Finance");

            return Request.CreateResponse(HttpStatusCode.OK,datatable);
        } 

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
