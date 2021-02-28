// import { render } from "@testing-library/react";

import { v4 as uuidv4 } from 'uuid';
import React, { Component } from "react";
import "./Form.css";

class Form extends Component {

//------------------------------> Для сбрасывания значений в инпуте
  defaultState = {
    name: '',
    number: '',
  }

state = {
  name: '',
  number: '',
}

// ----------------------------> Ф-я отображения в инпуте текста
fnInputTarget = (event) => {
  const input = event.target
  const value = input.value;
  const name = input.name;

  this.setState({
    [name]: value
  })
  }

  
// -------------------------> Ф-я отправки одного контакта:
fnSubmit = (event) => {
  
  //----------------------> Сбросили перезагрузку страницы
  event.preventDefault();
  
  //----------------------> Создали контакт
  const item = {
  id: uuidv4(),
  status: true,
  ...this.state
  }
  
  //----------------------> Добавляем контакт по условию:
  const arrayOfContacts = this.props.contacts
  const arrayOfNumbers = arrayOfContacts.map(item => item.number)
  // const arrayOfNames = arrayOfContacts.map(item => item.name)
  if (!arrayOfNumbers.includes(item.number)) {
        this.props.addToList(item)
        this.setState({ ...this.defaultState })
  }
  else {
    alert(`Такой номер телефона ${item.number} уже есть в контактах`)
  }
 // ----------------------> Передали контакт в список (компонент выше)
    // this.props.addToList(item)
 //-----------------------> Запустили сбрасывание в инпуте значений (initialState)
    // this.setState({...this.defaultState})
}

  render() {
    return (
      <form 
      className="NewTodoForm"
      autoComplete="off"
      onSubmit={this.fnSubmit}>
        <input 
          className="NewTodoForm__name"
          required
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.fnInputTarget}
        />
        <input
          className="NewTodoForm__name"
          required
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

// =======================================================================================
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

// inputHeandler = ({target}) => {
//   // const input = e.target;
//   // const value = input.value;
//   // const name = input.name;
//   const {value, name, type} = target
//   this.setState({
//     [name]: type === "checkbox" ? !this.state.agree : value,
//   });
// }