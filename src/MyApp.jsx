import React, { Component } from 'react';

import axios from 'axios'
import NumericInput from 'react-numeric-input';


class MyApp extends Component {
  constructor() {
    super();
 
    this.state = {
        todos: [],
       loading:false,
       saving:false,
       showMessage:false,
        name: "",
            company:"",
            age:0,
            email:"",
            isActive:"false",
            is_being_deleted : "",
            which_id_exactly:"",
            parent:"",
            numer:0,
            emailError:"",
    emailValid: false,
    numberValid: false,
    formValid: false,numberError:""
          }
          
    
        this.handleSubmit=this.handleSubmit.bind(this);
      //  this.changeHadler=this.changeHadler.bind(this);

  }
 






handleSubmit = event => {
  event.preventDefault();
  const isValid = this.validate();
  

  if (isValid) {
   
    this.setState({ emailError:"",numberError:"" });
  }
};
   
  componentDidMount() {
    fetch('http://localhost:3004/employees')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data,loading:true,saving:false})
      console.log(this.state.todos)
    })
    .catch(console.log)
    
   }
  
  


  render() {
  
     
        return (
          
        <div className="container">
        <div className="col-xs-12">
       
        <h1>My Todos</h1>
        <table>
          
                <thead>
                    <tr>
                     
                        <th>First Name</th>
                        <th>Age</th>
                       
                    </tr>
                </thead>
                <tbody>
                        {this.state.todos.map(todo =>

                        <tr  key={todo.id==undefined?"111":todo.id} style={{
                          backgroundColor: todo.isActive=="true" ? 'red' : 'blue',
                        }}>
                        {todo.id !== this.state.id_which_was_deleted &&
                        <>
                      
                                    <td>{todo.name+"  "}</td>
                                    <td>{todo.age+"  "}</td>
                                    <td>{todo.isActive+"  "}</td>
                        </> }
                        </tr>)
                        }
                </tbody>                               
            </table>        
        </div>
       </div>)
  }
}

export default MyApp;
