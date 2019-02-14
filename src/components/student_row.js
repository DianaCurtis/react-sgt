/* create a functional component bc just need to display info*/

import React from 'react';
import {Link} from 'react-router-dom';


const StudentRow=(props)=>{
    const {name,course,grade,id} = props.student;
    return(
        <tr>
            <td>
                <Link to={`/student/${id}`}>{name}</Link>
            </td>
            <td>{course}</td>
            <td>{grade}</td>
            <td className="center">
                <button onClick={() =>{props.delete(id)}} className="btn btn-small red darken-2">Delete</button>
            </td>
        </tr>

    )
}

export default StudentRow;
