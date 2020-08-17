using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ticketing.Models
{
    public class TicketResponse
    {
        public int Id { get; set; }
        public string TheResponseName { get; set; }
        public string Response { get; set; }
        public string RelevantTickl { get; set; }
    }
}
