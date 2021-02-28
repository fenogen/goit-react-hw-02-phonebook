import React from 'react'
import PropTypes from 'prop-types'

function Filter({filterValue, fnFilterTarget}) {

    return (
        <div className ="NewTodoForm">
            <h1>Contacts</h1>
            <input 
                className="NewTodoForm__name"
                type="text"
                name="title"
                placeholder="Find contacts by name"
                value={filterValue}
                onChange={fnFilterTarget}/>
        </div>
    )
}

Filter.propTypes = {

}

export default Filter

