using EmployeeDepartmentsWebApi.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.UI.WebControls;

namespace EmployeeDepartmentsWebApi.Controllers
{
      
    public class DepartmentController : ApiController
    {
        EmployeeDBContext db = new EmployeeDBContext();
        [System.Web.Http.Route("api/department/get")]
        [System.Web.Http.HttpGet]
        public HttpResponseMessage Get()
        {

           
            return Request.CreateResponse(HttpStatusCode.OK, db.Departments.ToList());

        }
        [System.Web.Http.Route("api/department/addDepartment")]
        [System.Web.Http.HttpPost]
        public string Post([FromBody] Department department)
        {
           var deptname = db.Departments.Where(n => n.DepartmentName == department.DepartmentName).FirstOrDefault();

            try
            {

                    db.Departments.Add(department);
                    db.SaveChanges();
                    return "New Department Added Successfully";
              

               
            }
            catch (Exception)
            {
                return "Failed to add department or already exist this department";
            }

        }
        [System.Web.Http.Route("api/department/updateDepartment")]
        [System.Web.Http.HttpPut]
        public string Put([FromBody]Department department)
        {
            try
            {

                var entity = db.Departments.FirstOrDefault(e => e.DepartmentID == department.DepartmentID);
                entity.DepartmentName = department.DepartmentName;

                db.SaveChanges();
                return "Updated Successfully";
            }
            catch (Exception)
            {
                return "Failed to update";
            }
        }
        [System.Web.Http.Route("api/department/deleteDept/{id}")]
        [System.Web.Http.HttpDelete]
        public string Delete(int id)
        {
            try
            {
                db.Departments.Remove(db.Departments.FirstOrDefault(e => e.DepartmentID == id));
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
