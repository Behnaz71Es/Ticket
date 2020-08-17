using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Ticketing.Data;
using Ticketing.Library;
using Ticketing.Models;
using Ticketing.Models.ViewModeels;

namespace Ticketing.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketsController : Controller
    {
        DBTicketingContext db { get; set; }
        public TicketsController(DBTicketingContext _db)
        { db = _db; }

        [HttpPost("[action]")]
        public IActionResult Insert([FromForm]TicketViewModel model) {
            Ticket ticket = new Ticket
            {
                Id = model.Id,
                TicketTopic = model.TicketTopic,
                RelevantSector = model.RelevantSector,

            };
            db.Add(ticket);
            db.SaveChanges();
            return Redirect("/Home");
            
        }
    }
}