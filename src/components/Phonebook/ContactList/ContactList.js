import React from 'react'
import PropTypes from 'prop-types'
import '../../Todo/Todo.css'


function ContactList(props) {
    return (
        <div>
        <div className ="NewTodoForm">
            <h1>Contacts</h1>
            <input 
            className="NewTodoForm__name"
            type="text"
            name="title"
            placeholder="Enter the name"
            value=""/>
        </div>
            <ol>
                <li className="flex">
                    <div className="Todo">
                    <div>
                        <p className="Todo__priority">Имя</p>
                        <p className="Todo__author"> Номер телефона</p>
                    </div>
                        <span className="Todo__remove" >X</span>
                        </div>
                </li>
                </ol>
        </div>
    )
}

ContactList.propTypes = {

}

export default ContactList

