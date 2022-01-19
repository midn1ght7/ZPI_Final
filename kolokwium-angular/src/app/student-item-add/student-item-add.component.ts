import { Component, OnInit } from '@angular/core';
import { StudentService } from '../studentservice';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-item-add',
  templateUrl: './student-item-add.component.html',
  styleUrls: ['./student-item-add.component.css']
})
export class StudentItemAddComponent implements OnInit {
  private studentService: StudentService;


  constructor(private StudentService: StudentService) {
    this.studentService = StudentService;
   }

  ngOnInit(): void {
  }

  submitAdd(fname: string, lname:string, age:string)
  {
    var student: Student = {
      id: 0,
      firstName: fname,
      lastName: lname,
      age: Number(age)
    };
    this.studentService.addStudent(student);
    console.log("submitAdd exited");
  }
}
