using Microsoft.AspNetCore.Mvc;
using Kolokwium.Api.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Kolokwium.Api.Controllers{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : ControllerBase{

        private ApplicationDbContext DbContext;

        public StudentController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetStudents(){
            try{
                var student_list = await DbContext.Students.ToListAsync();
                if (student_list == null){
                    return NotFound("Couldn't form student list");
                }
                else{
                    return Ok(student_list);
                }
            }
            catch{
                return this.Problem(
                    detail: "There was an error",
                    title: "Error"
                );
            }
        }

        [HttpPut]
        public async Task<IActionResult> editStudent(Student student){
            try{
                DbContext.Update(student);
                await DbContext.SaveChangesAsync();
                return Ok(student);
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
