import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { Router } from '@angular/router';
import {StudentService} from '../studentservice';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  //students: Student[] = [];
  students$: Observable<Student[]>;

  constructor(private router: Router, 
    private studentService: StudentService) {
    //this.students = [];
    this.students$ = studentService.students$;
  }

  // getStudents = async () => {
  //   try {
  //     const response = await fetch ("http://localhost:5000/Student");
  //     const studentsJson = await response.json();
  //     this.students = studentsJson; 
  //   }
  //   catch (e: any){
  //     console.log(e.message);
  //   }
  // }

  ngOnInit(): void {
    this.studentService.load();
  }

}
