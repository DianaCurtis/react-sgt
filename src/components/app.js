import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';


import React, {Component} from 'react';
import AddStudent from './add_student';
import Table from './table';


import {formatPostData} from '../helpers';

import axios from 'axios';

class App extends Component {

    state={
        students:[]
    }
    componentDidMount() {
        this.getStudentsData();
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

    addStudent =  async (student) =>{

        const formattedStudent = formatPostData(student);

        /* removed the hard coded http:/localhost bc we need to keep in mind that this will be deployed on a server made changes on the package.json file with the proxy*/
        await axios.post('/server/createstudent.php',formattedStudent);
        /*the server knows who the students are, so we grab it from the server*/
        this.getStudentsData();

    };

    deleteStudent = async (id) =>{
       /*we are going to have the server to delete*/

        const formattedId=formatPostData({id:id});

        await axios.post('/server/deletestudent.php',formattedId);
        this.getStudentsData(); //update the student


    }

    render(){
        return (
            <div>
                <h1 className="center">SGT</h1>
                <div className="row">
                    <div className="col s12 m8">
                        <Table deleteStudent={this.deleteStudent} studentList={this.state.students}/>
                    </div>
                    <div className="col s12 m4">
                        <AddStudent add={this.addStudent}/>
                    </div>
                </div>
            </div>
        )
    }

};

export default App;
