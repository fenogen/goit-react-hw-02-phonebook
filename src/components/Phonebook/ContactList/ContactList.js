import React from 'react'
import PropTypes from 'prop-types'
import './ContactList.css'

function ContactList({ contacts, fnRemove }) {

    return (
        <div>
            {contacts.map(contact => (
                <ul key={contact.id}>
                    <li>
                        <div className="item">
                            <div className="flex">
                                <p className="item__name flex-position">{contact.name}</p>
                                <p className="item__priority flex-position">{contact.number}</p>
                            </div>
                            <span onClick={() => fnRemove(contact.id)} className="item__remove">X</span>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    fnRemove: PropTypes.func,
}

export default ContactList

