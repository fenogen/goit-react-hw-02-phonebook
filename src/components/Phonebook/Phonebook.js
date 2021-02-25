import React, { useState, Component } from "react";
import Form from "./Form/Form";
import ContactList from './ContactList/ContactList'
import Todo from "../Todo/Todo";
import "./TodoList.css";


class Phonebook extends Component {

  state= {
    todoList: [],
    type: "all"
  }


//----------------------------> Добавляет
  addToList = (todo) => {
    this.setState((prev) =>({
    todoList: [...prev.todoList, todo],
  }))
  }

  removeFormList = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((todo) => todo.id !== id),
    })
  }

  editStatusTask = (id) => {
    this.setState({
      todoList: this.state.todoList.map(todo => (
        todo.id === id ? {...todo, status: !todo.status} : todo
      ),)
  });
  }


  changeFilter = ({target}) => {
    const type = target.dataset.filter;
    this.setState ({
      type,
    })
  }

  filterTask =() => {
    switch(this.state.type) {
      case "all":
        return this.state.todoList;
      case "completed":
          return this.state.todoList.filter(todo => todo.status === true);
      case "uncompleted" : 
          return this.state.todoList.filter(todo => todo.status === false);
      default:
            return this.state.todoList;
    }
  }


  
  render(){
    const {todoList} = this.state

    return(
      <div className="TodoList">
      <h1 className="TodoList__title">Phonebook</h1>
      <Form/>
      <ContactList/>
      
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