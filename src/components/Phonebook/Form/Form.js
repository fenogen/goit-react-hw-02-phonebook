import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Form.css";

class Form extends Component {

  //--------------------------------------> initialState - для сбрасывания значений в инпуте
  initialState = {
    title: "",
    author: "",
    priority: "Low",
    agree: false
  }

  state ={
    // title: "",
    // author: "",
    // priority: "Low",
    // agree: false
    ...this.initialState
  }

  //--------------------------------------> Отдельными ф-ями
//   titleInputHeader = ({target}) => {             // Пример с деструктуризацией
//     const {value} = target;
//     // const value = input.value;
//     this.setState({
//       tatle: value
//     })

//   }

//   authorInputHeader = (e) => {                  // Пример без деструктуризацией
//   const input = e.target;
//   const value = input.value;
//   this.setState({
//     author: value
//   })
// }

inputHeandler = ({target}) => {
  // const input = e.target;
  // const value = input.value;
  // const name = input.name;
  const {value, name, type} = target
  this.setState({
    [name]: type === "checkbox" ? !this.state.agree : value,
  });
}


// ------------------------> Ф-я отправки
handleSubmit =(e)=> {
  e.preventDefault();

  // ---------------------> Создание одного задания
  if (this.state.agree) {
  const singleTask = {
    title: this.state.title,
    author: this.state.author,
    priority: this.state.priority,
    id: Date.now(),
    status: false
  }
  console.log(singleTask.id)

  // ---------------------> Передали задание в общий перечень
  this.props.addToList(singleTask)
  //--------------------------------------> Запустили сбрасывание в инпуте значений (initialState)
  this.setState({...this.initialState})
}
}

  render() {

    // const { title, author, priority, agree} = this.state

    return (
      <form className="NewTodoForm"autoComplete="off">
        <input 
          className="NewTodoForm__name"
          type="text"
          name="title"
          placeholder="Name"
          value=""
        />
        <input
          className="NewTodoForm__name"
          type="text"
          name="author"
          placeholder="Number"
          value=""
        />
        <button className="NewTodoForm__submit" type="submit">
          Add Todo
        </button>
      </form>
    );
  
}
}

export default Form;

// render() {

//   const { title, author, priority, agree} = this.state

//   return (
//     <form   
//     onSubmit={this.handleSubmit}
//     className="NewTodoForm"autoComplete="off">
//       <input
//       onChange={this.inputHeandler}
//         className="NewTodoForm__name"
//         type="text"
//         name="title"
//         placeholder="New Todo"
//         value={title}
//       />
//       <input
//        onChange={this.inputHeandler}
//         className="NewTodoForm__name"
//         type="text"
//         name="author"
//         placeholder="Author"
//         value={author}
//       />
//       <select
//       onChange={this.inputHeandler}
//       value={priority} name="priority" className="NewTodoForm__select">
//         <option value='' disabled hidden>
//           Priority
//         </option>
//         <option value="Low">Low</option>
//         <option value="Medium">Medium</option>
//         <option value="High">High</option>
//       </select>
//       <label htmlFor="agree" className="confirm">
//         <input
//          onChange={this.inputHeandler}
//         type="checkbox" id="agree" name="agree" checked={agree}/>
//         Agree with our policy
//       </label>
//       <button disabled={!agree} className={agree ? "NewTodoForm__submit" : "NewTodoForm__submit-unactive"} type="submit">
//         Add Todo
//       </button>
//     </form>
//   );

// }
// }