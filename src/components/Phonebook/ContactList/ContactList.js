import React from 'react'
import PropTypes from 'prop-types'
import '../../Todo/Todo.css'


function ContactList({name, number, editStatusTask }) {
    return (
        <div>
            <ol>
                <li className="flex">
                    <div className="Todo">
                    <div>
                        <p className="Todo__priority">{name}</p>
                        <p className="Todo__author">{number}</p>
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

