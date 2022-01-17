using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Kolokwium.Api.Model;

namespace Kolokwium.Api.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class AuthorsController : ControllerBase{
        private ApplicationDbContext DbContext;

        public AuthorsController(ApplicationDbContext dbContext)
        {
            this.DbContext = dbContext;
        }

        [HttpGet]
        //[ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Author))]
        //[ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetAuthors()
        {
            try{
                var list = await DbContext.Authors.ToListAsync();
                return Ok(list);
            }
            catch{
                return this.Problem(detail: "There was an error.",
                title: "Error");
            }
        }

        [HttpGet("{id}", Name="GetAuthor")]
        public async Task<IActionResult> GetAuthor(int id){
            try{
                var author = await DbContext.Authors.SingleOrDefaultAsync(a=>a.Id == id);
                if (author == null)
                {
                    return NotFound($"Author {id} not found");
                }
                else{
                    return Ok(author);
                }
            }
            catch{
                return this.Problem(
                    detail: "There was an error",
                    title: "Error"
                );
            }
        }

        [HttpPost]
        public async Task<IActionResult> InsertAuthor([FromBody] Author author){
            if (!ModelState.IsValid){
                return BadRequest();
            }
            try{
                DbContext.Authors.Add(author);
                await DbContext.SaveChangesAsync();
                return CreatedAtAction("GetAuthor", new {id = author.Id}, author);
            }
            catch{
                return this.Problem(
                    detail: "There was an error",
                    title: "Error"
                );
            }
        }
    }
}