namespace EmployeeDepartmentsWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mresponsetable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Responses",
                c => new
                    {
                        Status = c.String(nullable: false, maxLength: 128),
                        Message = c.String(),
                    })
                .PrimaryKey(t => t.Status);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Responses");
        }
    }
}
