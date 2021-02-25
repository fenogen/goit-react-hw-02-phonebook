import React from 'react'
import PropTypes from 'prop-types'

function Filter(props) {
    return (
        <div className ="NewTodoForm">
            <h1>Contacts</h1>
            <input 
            className="NewTodoForm__name"
            type="text"
            name="title"
            placeholder="Enter the name"
            value=""/>
        </div>
    )
}

Filter.propTypes = {

}

export default Filter

