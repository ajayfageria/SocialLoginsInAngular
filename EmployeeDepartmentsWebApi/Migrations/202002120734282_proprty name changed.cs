namespace EmployeeDepartmentsWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class proprtynamechanged : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Employees", "DepartmentName", c => c.String());
            DropColumn("dbo.Employees", "Department");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Employees", "Department", c => c.String());
            DropColumn("dbo.Employees", "DepartmentName");
        }
    }
}
