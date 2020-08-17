using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ticketing.Models.ViewModeels
{
    public class TicketViewModel
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string TicketTopic { get; set; }
        public string TextTicket { get; set; }
        public string Priority { get; set; }
        public string RelevantService { get; set; }
        public string RelevantSector { get; set; }
        public string Attachment { get; set; }
    }
}
