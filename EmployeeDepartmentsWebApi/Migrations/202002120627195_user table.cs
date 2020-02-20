namespace EmployeeDepartmentsWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class usertable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Email = c.String(nullable: false, maxLength: 128),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.Email);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Users");
        }
    }
}
