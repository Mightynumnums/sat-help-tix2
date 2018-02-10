import React, { Component } from 'react'

export deafult class AddStudentForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''

        }
    }
}

render() {
    return (
        <form>
           <label>
               First Name: 
               <input type="text" />
           </label>
           <label>
               Last Name: 
               <input type="text" />
           </label>
           <label>
               Email: 
               <input type="email" />
           </label>    
        </form>
        <button type="submit">Submit New Student</button>
    )
}