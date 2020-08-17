using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Ticketing.Areas.Identity.Data;
using Ticketing.Data;

[assembly: HostingStartup(typeof(Ticketing.Areas.Identity.IdentityHostingStartup))]
namespace Ticketing.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<DBTicketingContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("DBTicketingContextConnection")));

                services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<DBTicketingContext>().AddRoles<IdentityRole>();
            });
        }
    }
}