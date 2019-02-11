import React from 'react';
import StudentRow from './student_row';


const Table = (props) =>{

        const studentRows=props.studentList.map((student)=>{
                return <StudentRow delete={props.deleteStudent} key={student.id} student={student}/>
            }
        );

        return(
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {studentRows}
                </tbody>
            </table>
        );
    }


export default Table;