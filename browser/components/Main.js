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
        this.addStudent = this.addStudent.bind(this)
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

    addStudent(student) {
        console.log('inside of addStudent ARE WE HEREEEE?')
        axios.post('/student', student) //look at line 17 addStudentForm where student is defined as an object!!!
        .then(res => res.data)
        .then(studentObj => this.setState({
            students: [...this.state.students, studentObj]})
        )
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
                            <AddStudentForm addStudent={this.addStudent} /> 
                        )
                        : null 
                    }
                <Students students={this.state.students} /> 
            </div>
        )
    }
}
