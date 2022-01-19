import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {
  @Input() student: Student;

  constructor(private router: Router) { 
    this.student = {
      id: 0,
      firstName: '',
      lastName: '',
      age: 0
    };
  }

  ngOnInit(): void {
  }

}
