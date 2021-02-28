import React from 'react'
import PropTypes from 'prop-types'
import "../Form/Form.css";

function Filter({filterValue, fnFilterTarget}) {

    return (
        <div className ="newForm">
            <h2 className="filter-title">Contacts</h2>
            <input 
                className="newForm__name"
                type="text"
                name="title"
                placeholder="Find contacts by name"
                value={filterValue}
                onChange={fnFilterTarget}/>
        </div>
    )
}

Filter.propTypes = {
    filterValue: PropTypes.string,
    fnFilterTarget: PropTypes.func,
}

export default Filter

