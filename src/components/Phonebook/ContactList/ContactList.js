import React from 'react'
import PropTypes from 'prop-types'
import '../../Todo/Todo.css'


function ContactList(props) {
    return (
        <div>
            <h1>Contacts</h1>
            <input 
            className="NewTodoForm__name"
            type="text"
            name="title"
            placeholder="Enter the name"
            value=""/>
            <ul className="Todo">   {/*Добавлен клас*/}
                <li>Number #1
                <span className="Todo__remove" >X</span>
                </li>
                </ul>
        </div>
    )
}

ContactList.propTypes = {

}

export default ContactList

