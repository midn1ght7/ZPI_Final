using Microsoft.AspNetCore.Mvc;
using Kolokwium.Api.Models;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;

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
                var studentdb = DbContext.Students.First(a => a.Id == student.Id);
                studentdb.FirstName = student.FirstName;
                studentdb.LastName = student.LastName;
                studentdb.Age = student.Age;
                await DbContext.SaveChangesAsync();
                return Ok(studentdb);
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
