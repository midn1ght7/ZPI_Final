import React from 'react';
import {Student} from './models/student';

interface Props{
    student: Student;
}

export const StudentComponent: React.FC<Props> = ({ student }) => {
    return (
        <div className="student-info">
            <p>ID: {student.id}</p>
            <p>First Name: {student.firstName}</p>
            <p>Last Name: {student.lastName}</p>
            <p>Age: {student.age}</p>
        </div>
    );
}












