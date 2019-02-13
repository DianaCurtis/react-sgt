import React, {Component} from 'react';

class AddStudent extends Component{

    state={
        name:'',
        course:'',
        grade: '',
        instructor: '',
        notes: ''
    }

    handleSubmit = (event) =>{
        /*so that the default behavior of refresh in the form does not occur*/
        event.preventDefault();

        this.props.add(this.state);
        this.resetForm();
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


        return(
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
        );
    }
}

export default AddStudent;