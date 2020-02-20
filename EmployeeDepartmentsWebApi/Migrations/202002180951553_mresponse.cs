namespace EmployeeDepartmentsWebApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mresponse : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Users");
            AddColumn("dbo.Users", "UserName", c => c.String(nullable: false, maxLength: 128));
            AddPrimaryKey("dbo.Users", "UserName");
            DropColumn("dbo.Users", "name");
            DropColumn("dbo.Users", "provider");
            DropColumn("dbo.Users", "provideid");
            DropColumn("dbo.Users", "token");
            DropColumn("dbo.Users", "idToken");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "idToken", c => c.String());
            AddColumn("dbo.Users", "token", c => c.String());
            AddColumn("dbo.Users", "provideid", c => c.String());
            AddColumn("dbo.Users", "provider", c => c.String());
            AddColumn("dbo.Users", "name", c => c.String(nullable: false, maxLength: 128));
            DropPrimaryKey("dbo.Users");
            DropColumn("dbo.Users", "UserName");
            AddPrimaryKey("dbo.Users", "name");
        }
    }
}
