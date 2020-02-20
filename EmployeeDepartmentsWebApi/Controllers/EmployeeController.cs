using EmployeeDepartmentsWebApi.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeDepartmentsWebApi.Controllers
{
    public class EmployeeController : ApiController
    {
        EmployeeDBContext db = new EmployeeDBContext();

        [System.Web.Http.Route("api/employee/get")]
        [HttpGet]
        public IEnumerable<Employee> Get()
        {

            return db.Employees.ToList();

        }
        [System.Web.Http.Route("api/employee/addEmployee")]
        [System.Web.Http.HttpPost]
        public string Post([FromBody] Employee employee)
        {
            try
            {
                db.Employees.Add(employee);
                db.SaveChanges();
                return "Successfully employee ID created";
            }
            catch (Exception)
            {
                return "Failed to add employee ID";
            }

        }
        [System.Web.Http.Route("api/employee/updateEmployee")]
        [System.Web.Http.HttpPut]
        public string Put([FromBody]Employee employee)
        {
            try
            {

                var entity = db.Employees.FirstOrDefault(e => e.EmployeeID == employee.EmployeeID);
                entity.EmployeeName = employee.EmployeeName;
                entity.EmailId = employee.EmailId;
                entity.DOJ = employee.DOJ;
                entity.DepartmentName = employee.DepartmentName;

                db.SaveChanges();
                return "Updated Successfully";
            }
            catch (Exception)
            {
                return "Failed to update";
            }
        }
        [System.Web.Http.Route("api/employee/deleteEmployee/{id}")]
        [System.Web.Http.HttpDelete]
        public string Delete(int id)
        {
            try
            {
                db.Employees.Remove(db.Employees.FirstOrDefault(e => e.EmployeeID == id));
                db.SaveChanges();
                return "Successfully deleted";
            }
            catch (Exception)
            {
                return "failed to delete";

            }
        }
    }
}
