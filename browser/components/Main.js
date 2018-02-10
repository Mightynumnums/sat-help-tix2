import React, {Component} from 'react';
import axios from 'axios';
import Students from './Students.js'
import AddStudentForm from './AddStudentForm';

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            students: [],
            showForm: false
        }
        this.getStudents = this.getStudents.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
    }

    componentDidMount(){//state is always set initially (toms 1st law)
                        //this calls it to be set again after initial render
        this.getStudents()
    }

    getStudents(){
        axios.get('/student')
        .then(res => this.setState({students: res.data}))
        .catch(console.error)
    }
    toggleForm() {
        this.setState({ showForm: !this.state.showForm })
    }

    render(){
        return (
            <div>
                <h1>Happy Saturday!</h1>
                <button onClick={ this.toggleForm }>Add Student</button>  
                    {
                        this.state.showForm
                        ? (
                            <AddStudentForm />
                        )
                        : null //thisi toggles the button's state
                    }
                <Students students={this.state.students} />
            </div>
        )
    }
}
