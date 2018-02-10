import React, {Component} from 'react';
import axios from 'axios';
import Students from './Students.js'
import AddStudentsForm from './AddStudentForm';

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            students: [],
            showForm: false
        }
        this.getStudents = this.getStudents.bind(this)
        //this.toggleForm = this.toggleForm
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
                <button onClick={() => this.toggleForm()}>Add Student</button>
                <Students students={this.state.students} />
                <AddStudentsForm />
            </div>
        )
    }
}
