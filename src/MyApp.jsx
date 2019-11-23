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
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[e.target.name]:e.target.value})
   
};


validate = () => {
  
  let emailError2 = "";
  let numberError2 = "";

  // let passwordError = "";

 

  if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    emailError2 = "invalid email";
  }

  const phone = /^[0-9]{9}$/;
  
  if (!phone.test(this.state.numer)||this.state.numer.toString().length>9) {
    numberError2 = "invalid number";
  }

  if (emailError2 || numberError2) {
    this.setState({ emailError:emailError2,numberError:numberError2 });
    return false;
  }

  return true;
};



handleSubmit = event => {
  event.preventDefault();
  const isValid = this.validate();
  console.log("vaw");

  if (isValid) {
    // clear form
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
        <label>Age: </label>
        <NumericInput type="text" name="age"   value={this.state.age} onChange={value => this.setState({age: value })} />
        { (this.state.age>=18 )&&(<form onSubmit={this.handleSubmit}>

      

        <label>Name: </label>
        <input type="text" name="name" value={this.state.name} onChange={this.changeHadler} />
        <br />
        <label>Email: </label>
        <input type="text" name="email"  value={this.state.email}  onChange={this.changeHadler} />
        <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        <br />
        

        <button   >Submit</button>
        </form>) } 

        {(this.state.age<18 )&&(<form onSubmit={this.handleSubmit}>
                
       
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
        <button  >Submit</button>
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
