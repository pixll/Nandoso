using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Data.Entity.Migrations;

namespace Nandoso.Models
{
    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public class NandosoContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public NandosoContext() : base("name=NandosoContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<NandosoContext, MyConfiguration>());
        }

        public System.Data.Entity.DbSet<Nandoso.Models.Special> Specials { get; set; }

        public class MyConfiguration : DbMigrationsConfiguration<NandosoContext>
        {
            public MyConfiguration()
            {
                this.AutomaticMigrationsEnabled = true;
            }

            protected override void Seed(NandosoContext context)
            {
                var specials = new List<Special>
            {
                new Special { Name = "Flame grilled chicken",   Description = "3 pieces of juicy flame grilled chicken",
                    Price = 10.00M },
                new Special { Name = "Fudge",   Description = "Thick and chocolaty fudge",
                    Price = 5.50M },
                new Special { Name = "Brownie",   Description = "Our renowned chocolate brownie",
                    Price = 6.20M },
                new Special { Name = "Chicken burger",   Description = "Layers of flame grilled chicken with lettuce and spices between two golden buns",
                    Price = 14.99M },
                new Special { Name = "Chicken pizza",   Description = "A delicious pizza with chunks of flame grilled chicken generously applied",
                    Price = 13.00M },
                new Special { Name = "Cola",   Description = "A 1.5L bottle of that black fizzy stuff",
                    Price = 2.70M },
                new Special { Name = "Soylent Green",   Description = "No comment.",
                    Price = 3.30M }
            };
                specials.ForEach(s => context.Specials.AddOrUpdate(p => p.Description, s));
                context.SaveChanges();

            }

        }

        public System.Data.Entity.DbSet<Nandoso.Models.Feedback> Feedbacks { get; set; }
    }
}
