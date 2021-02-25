import React, { useState, Component } from "react";
import Form from "./Form/Form";
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import "./TodoList.css";


class Phonebook extends Component {

  // state= {
  //   todoList: [],
  //   type: "all"
  // }

state = {
  contacts: [],
  filter: '',
  name: ''
}


//----------------------------> Добавляет
  addToList = (item) => {
    this.setState((prev) =>({
    contacts: [...prev.contacts, item],
  }))
  console.log('yes')
  }


//   removeFormList = (id) => {
//     this.setState({
//       todoList: this.state.todoList.filter((todo) => todo.id !== id),
//     })
//   }

//   editStatusTask = (id) => {
//     this.setState({
//       todoList: this.state.todoList.map(todo => (
//         todo.id === id ? {...todo, status: !todo.status} : todo
//       ),)
//   });
//   }



//   changeFilter = ({target}) => {
//     const type = target.dataset.filter;
//     this.setState ({
//       type,
//     })
//   }

//   filterTask =() => {
//     switch(this.state.type) {
//       case "all":
//         return this.state.todoList;
//       case "completed":
//           return this.state.todoList.filter(todo => todo.status === true);
//       case "uncompleted" : 
//           return this.state.todoList.filter(todo => todo.status === false);
//       default:
//             return this.state.todoList;
//     }
//   }


  
  render(){

    return(
      <div className="TodoList">
      <h1 className="TodoList__title">Phonebook</h1>
      <Form
      addToList={this.addToList} />
      <Filter/>
      <ContactList
      contact={this.state.contacts}
      addToList={this.addToList}
      editStatusTask={this.editStatusTask}/>
    </div>
    )
  }
}


// {this.filterTask().map((todo) => (
//   <li key={todo.id}>
//     <Todo
//     {...todo} 
//     removeFormList={this.removeFormList} 
//     editStatusTask={this.editStatusTask}/>
//   </li>
// ))}

// <div className="filters">
// <button  onClick={this.changeFilter} className="NewTodoForm__submit" data-filter="all">
//   All
// </button>
// <button  onClick={this.changeFilter} className="NewTodoForm__submit" data-filter="completed">
//   Completed
// </button>
// <button  onClick={this.changeFilter} className="NewTodoForm__submit" data-filter="uncompleted">
//   Uncompleted
// </button>

export default Phonebook;