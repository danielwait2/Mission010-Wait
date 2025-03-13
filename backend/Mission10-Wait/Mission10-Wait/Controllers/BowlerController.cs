using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10_Wait.Data;

namespace Mission10_Wait.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlerDbContext _bowlerContext;
        
        public BowlerController(BowlerDbContext temp)
        {
            _bowlerContext = temp;
        }
        
        [HttpGet(Name = "GetMarriottFood")]
        public IEnumerable<Bowler> Get()
        {
            var teamsToFilter = new[] { "Sharks", "Marlins" };

            var bowlerList = _bowlerContext.Bowlers.Include(x=>x.Team).Where(x => teamsToFilter.Contains(x.Team.TeamName)).ToList();
            
            return (bowlerList);
        }
    }
    
}