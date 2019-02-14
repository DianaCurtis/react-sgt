import React, {Component} from 'react';
import StudentRow from './student_row';
import axios from "axios";
import {formatPostData} from "../helpers";
import {Link} from 'react-router-dom';



class Table extends Component {

    state={
        students:null
    }
    componentDidMount() {
        this.getStudentsData();
    }


    deleteStudent = async (id) =>{
        /*we are going to have the server to delete*/

        const formattedId=formatPostData({id:id});

        await axios.post('/server/deletestudent.php',formattedId);
        this.getStudentsData(); //update the student


    }

    async getStudentsData(){
        // Call server to get students

        // more towards asyncawait
        const resp = await  axios.get('/server/getstudentlist.php');


        this.setState({
            students: resp.data.data || []
        })

        // as oppose to the above one
        // if(resp.data.success){
        //     this.setState({
        //         students:resp.data.data
        //     })
        // }else{
        //     this.setState({
        //         students:[]
        //     })
        // }


        // traditional way
        // axios.get('http://localhost/server/getstudentlist.php').then((response)=>{
        //     console.log('Server Response',response.data.data);
        //     this.setState({
        //         students:response.data.data
        //     });
        // });
    }

    render() {

        const {students} = this.state;
        let studentRows = [];

        /*is student list exist and has a length*/
        if (Array.isArray(students) && students.length) { //if have data
            studentRows = students.map((student) => {
                    return <StudentRow delete={this.deleteStudent} key={student.id} student={student}/>
                }
            );
        } else if(students === null)
        {    studentRows.push(
            <tr key="no-data">
                <td colSpan="4">
                    <h4 className="center grey-text">Student Data Loading ...</h4>
                </td>
            </tr>
        )} else {// if have no data
            studentRows.push(
                <tr key="no-data">
                    <td colSpan="4">
                        <h4 className="center grey-text">No Student Data Available</h4>
                    </td>
                </tr>
            )
        }

        return (
            <div>
                <h1 className="center">Student Grade Table</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link className="btn blue" to="/add-student">Add Student</Link>
                    </div>
                </div>
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
            </div>
        );
    }
}


export default Table;