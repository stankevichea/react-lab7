import React, { Component } from 'react';
import axios from 'axios'
import NumericInput from 'react-numeric-input';
import uuid from "uuid";

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
        this.changeHadler=this.changeHadler.bind(this);

  }
 
  changeHadler =(e) =>{
    this.setState({[e.target.name]:e.target.value})

      
    
};




handleSubmit = event => {
  event.preventDefault();

  
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
        <label>Age: </label>
        <NumericInput type="text" name="age"   value={this.state.age} onChange={value => this.setState({age: value })} />
        { (this.state.age>=18 )&&(<form >

      

        <label>Name: </label>
        <input type="text" name="name" value={this.state.name} onChange={this.changeHadler} />
        <br />
        <label>Email: </label>
        <input type="text" name="email"  value={this.state.email}  onChange={this.changeHadler} />
        <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        <br />
        

        </form>) } 

        {(this.state.age<18 )&&(<form>
                
       
        <label>Name: </label>
        <input type="text" name="name" value={this.state.name} onChange={this.changeHadler} />
        <br />
        <label>Parent number: </label>
        <input type="number" name="numer" value={this.state.numer} onChange={this.changeHadler} />
        <br />
        <label>Parent Name: </label>
        <input type="text" name="parent" value={this.state.parent} onChange={this.changeHadler} />
        <br />
        
         <div style={{ fontSize: 12, color: "red" }}>
            {this.state.numberError}
          </div>
        </form>)} 


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
