import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Student } from 'src/app/models/student';
import {StudentService} from '../studentservice';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-student-item-edit',
  templateUrl: './student-item-edit.component.html',
  styleUrls: ['./student-item-edit.component.css']
})
export class StudentItemEditComponent implements OnInit {
  //id!: number;
  student$: Observable<Student | undefined>;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private studentService: StudentService) {
      //this.student$ = this.studentService.findById(this.route.snapshot.params['id']);
      this.student$ = route.paramMap.pipe(map((p:ParamMap) => parseInt(p.get('id') as string)),
      switchMap((id:number) => studentService.findById(id)));
    }

  submitEdit(fname: string, lname:string, age:string)
  {
    this.studentService.editStudent(this.route.snapshot.params['id'], fname, lname, Number(age));
  }

  ngOnInit(): void {
  }

}
