import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Student } from './models/student';
import {StudentListComponent} from './StudentListComponent';
import {StudentAddComponent} from './StudentAddComponent';

function App() {

  const [studentState, setStudentState] = useState<Student[]>([] as Student[]);
  useEffect(() => {
    fetch('http://localhost:5000/Student')
    .then((res) => res.json())
    .then((res: Student[]) => {
      setStudentState(res);
    });
  }, []);

  const addStudent = async (student: Student): Promise<void> => {
    const request: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(student)
    };
    fetch('http://localhost:5000/Student', request)
    .then((res) => res.json())
    .then((res) => {
      setStudentState([...studentState, res]);
    })
  }

  return (
    <div className="App">
      {!!studentState && <StudentListComponent students={studentState} />}
      {!!studentState && <StudentAddComponent handleAddStudent={addStudent} />}
    </div>
  );
}

export default App;
