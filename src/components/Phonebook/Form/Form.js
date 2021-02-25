import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Form.css";

class Form extends Component {

//--------------------------------------> Для сбрасывания значений в инпуте
  defaultState = {
    name: '',
    number: '',
  }

//   state ={
//     // title: "",
//     // author: "",
//     // priority: "Low",
//     // agree: false
//     ...this.initialState
//   }

state = {
  name: '',
  number: '',
}

//   //--------------------------------------> Отдельными ф-ями
// //   titleInputHeader = ({target}) => {             // Пример с деструктуризацией
// //     const {value} = target;
// //     // const value = input.value;
// //     this.setState({
// //       tatle: value
// //     })

// //   }

// //   authorInputHeader = (e) => {                  // Пример без деструктуризацией
// //   const input = e.target;
// //   const value = input.value;
// //   this.setState({
// //     author: value
// //   })
// // }

// inputHeandler = ({target}) => {
//   // const input = e.target;
//   // const value = input.value;
//   // const name = input.name;
//   const {value, name, type} = target
//   this.setState({
//     [name]: type === "checkbox" ? !this.state.agree : value,
//   });
// }

// ----------------------------> Ф-я отображения в инпуте текста
fnInputTarget = (event) => {
  console.log(event.target)
  console.log(event.target.value)
  const input = event.target
  const value = input.value;
  const name = input.name;

  this.setState({
    [name]: value
  })
}

// // ------------------------> Ф-я отправки одного контакта:
fnSubmit = (event) => {
  event.preventDefault();
const item = {
  id: Date.now(), // - подключить утилиту
  status: true,
  ...this.state
 }
 // ---------------------> Передали контакт в список (компонент выше)
this.props.addToList(item)
//--------------------------------------> Запустили сбрасывание в инпуте значений (initialState)
this.setState({...this.defaultState})
}
//   // ---------------------> Создание одного задания
//   if (this.state.agree) {
//   const singleTask = {
//     title: this.state.title,
//     author: this.state.author,
//     priority: this.state.priority,
//     id: Date.now(),
//     status: false
//   }


  render() {

    // const { title, author, priority, agree} = this.state

    return (
      <form 
      className="NewTodoForm"
      autoComplete="off"
      onSubmit={this.fnSubmit}>
        <input 
          className="NewTodoForm__name"
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.fnInputTarget}
        />
        <input
          className="NewTodoForm__name"
          type="number"
          name="number"
          placeholder="Number"
          value={this.state.number}
          onChange={this.fnInputTarget}
        />
        <button 
        className="NewTodoForm__submit" 
        type="submit"
         >
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