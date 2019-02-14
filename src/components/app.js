import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';


import React, {Component} from 'react';
import AddStudent from './add_student';
import Table from './table';
import {Route} from 'react-router-dom';
import ViewStudent from './view_student';




class App extends Component {

    render(){
        return (
            <div className="container">
               <Route exact path="/" component={Table}/>
               <Route path="/add-student" component={AddStudent}/>
               <Route path="/student/:id" component={ViewStudent}/>
            </div>
        )
    }

};

export default App;
