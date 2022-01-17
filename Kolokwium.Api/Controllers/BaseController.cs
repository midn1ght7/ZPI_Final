using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Kolokwium.Api.Controllers {
    
    [ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public abstract class BaseController : Controller {
        protected ApplicationDbContext DbContext;

        public BaseController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }
    }
}