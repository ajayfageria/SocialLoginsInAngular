using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EmployeeDepartmentsWebApi.Models
{
    public class EmployeeDBContext:IdentityDbContext
    {
        public EmployeeDBContext():base("EmployeeDBContext")
        {

            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<EmployeeDBContext>());

        }

        public DbSet<Department> Departments { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Response> Responses { get; set; }
    }
}