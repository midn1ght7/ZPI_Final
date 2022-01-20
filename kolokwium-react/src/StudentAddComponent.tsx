import React, {useState} from "react";
import {Student} from './models/student';

interface Props {
    handleAddStudent: (student: Student) => Promise<void>;
}

export const StudentAddComponent: React.FC<Props> = ({handleAddStudent}) => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
          event.preventDefault();
          console.log(fname);
          console.log(lname);
          console.log(age);
          var Student: Student={
            id: 0,
            firstName: fname,
            lastName: lname,
            age: Number(age)
          }
          handleAddStudent(Student);
    };

    return(
        <div className = "student-add">
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" id="fName" placeholder="Input first name" onChange={(e) => setFname(e.target.value)}></input>
                <br></br>
                <input type="text" id="lName" placeholder="Input last name" onChange={(e) => setLname(e.target.value)}></input>
                <br></br>
                <input type="text" id="age" placeholder="Input age" onChange={(e) => setAge(e.target.value)}></input>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>    
        </div>
    );
};