import React, {Component} from 'react';
import {formatPostData} from "../helpers";
import axios from "axios";

import {Link} from 'react-router-dom';


class AddStudent extends Component{

    state={
        name:'',
        course:'',
        grade: '',
        instructor: '',
        notes: ''
    }


    handleSubmit = async (event) =>{
        /*so that the default behavior of refresh in the form does not occur*/
        event.preventDefault();

        const formattedStudent = formatPostData(this.state);

        /* removed the hard coded http:/localhost bc we need to keep in mind that this will be deployed on a server made changes on the package.json file with the proxy*/
        await axios.post('/server/createstudent.php',formattedStudent);
        /*the server knows who the students are, so we grab it from the server*/

        this.props.history.push('/'); // can put in any page to navigate to
    }


    handleKyPress =(event)=>{

        this.setState({
            [event.target.name]: event.target.value
        });


        // switch(event.target.name){
        //     case 'name':
        //         this.setState({
        //             name:event.target.value
        //         });
        //         break;
        //     case 'course':
        //         this.setState({
        //             course:event.target.value
        //         });
        //         break;
        //     case 'grade':
        //         this.setState({
        //             grade:event.target.value
        //         });
        // }

    }


    resetForm = () =>{

        this.setState({
            name:'',
            course:'',
            grade: '',
            instructor: '',
            notes: ''
        });

    }

    render(){

        const {name,course,grade, instructor, notes}=this.state;
        console.log('Add student props',this.props);

        return(
            <div>
                <h1 className="center">Add Student</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link className="btn blue" to="/">Home</Link>
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKyPress} name="name" type="text" id="name" value={name} autoComplete="off"/>
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKyPress} name="course" type="text" id="course" value={course} autoComplete="off"/>
                            <label htmlFor="course">Course</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKyPress} name="grade"  type="text" id="grade" value={grade} autoComplete="off"/>
                            <label htmlFor="grade">Grade</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKyPress} name="instructor"  type="text" id="instructor" value={instructor} autoComplete="off"/>
                            <label htmlFor="instructor">Instructor</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col input-field s10 offset-s1">
                            <input onChange={this.handleKyPress} name="notes"  type="text" id="notes" value={notes} autoComplete="off"/>
                            <label htmlFor="notes">Notes</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6 center">
                            <button onClick={this.resetForm} type="button" className="btn red darken-2 waves-effect waves-light">Clear</button>
                        </div>
                        <div className="col s6 center">
                            <button className="btn green darken-2">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddStudent;