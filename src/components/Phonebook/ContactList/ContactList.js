import React from 'react'
import PropTypes from 'prop-types'
import '../../Todo/Todo.css'

function ContactList({ contacts, fnRemove }) {

    return (
        <div>
            {contacts.map(contact => (
                <ul key={contact.id}>
                    <li className="flex">
                        <div className="Todo">
                            <div>
                                <p className="Todo__priority">{contact.name}</p>
                                <p className="Todo__author">{contact.number}</p>
                            </div>
                            <span onClick={() => fnRemove(contact.id)} className="Todo__remove">X</span>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    )
}

ContactList.propTypes = {

}

export default ContactList

