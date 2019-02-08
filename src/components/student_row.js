/* create a functional component bc just need to display info*/

import React from 'react';


const StudentRow=(props)=>{
    const {name,course,grade}=props.student;
    return(
        <tr>
            <td>{name}</td>
            <td>{course}</td>
            <td>{grade}</td>
        </tr>

    )
}

export default StudentRow;
