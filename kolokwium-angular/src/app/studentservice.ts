import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Student} from 'src/app/models/student';

@Injectable({
    providedIn: 'root'
})

export class StudentService{
    private studentCollectionChange: BehaviorSubject<Student[]>;
    private actions$: BehaviorSubject<(student: Student[]) => Student[]>;
    

    students$: Observable<Student[]>;

    constructor (private client: HttpClient){
        this.actions$ = new BehaviorSubject((a) => a);
        this.studentCollectionChange = new BehaviorSubject([] as Student[]);
        this.students$ = this.studentCollectionChange.asObservable();
    }

    private add(student: Student) : (collection: Student[]) => Student[] {
        this.load();
        return (collection: Student[]) => [...collection, student];
    }

    load(){
        this.client.get<Student[]>("http://localhost:5000/Student").subscribe(res => this.studentCollectionChange.next(res),
        error => console.error(error));
    }

    findById(id: number): Observable <Student | undefined> {
        return this.students$.pipe(map((students:Student[]) => students.find(a => a.id === id)));
    }

    addStudent(student: Student): void{
        this.client.post<Student>("http://localhost:5000/Student", student).subscribe(res => this.actions$.next(this.add(res)));
    } 

    editStudent(id: number, fname:string, lname:string, age: number){
        var student: Student = {
            id: id,
            firstName: fname,
            lastName: lname,
            age: age
        };
        this.client.put<Student>("http://localhost:5000/Student", student).subscribe(res => this.actions$.next(this.add(res)));
        console.log("editStudent sent put");
    }
}