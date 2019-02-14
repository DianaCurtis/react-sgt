import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ViewStudent extends Component {
    render(){
        return(
            <div>
                <h1 className="center">Student Details</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/" className="btn blue"> Home</Link >
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewStudent;