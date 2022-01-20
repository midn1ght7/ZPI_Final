import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Student } from './models/student';
import {StudentListComponent} from './StudentListComponent';

function App() {

  const [studentState, setStudentState] = useState<Student[]>([] as Student[]);
  useEffect(() => {
    fetch('http://localhost:5000/Student')
    .then((res) => res.json())
    .then((res: Student[]) => {
      setStudentState(res);
    });
  }, []);

  return (
    <div className="App">
      {!!studentState && <StudentListComponent students={studentState} />}
    </div>
  );
}

export default App;
