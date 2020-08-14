import React from 'react';

const FilterBar = props => {
    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" placeHolder="Search by Store Name" onChange={(e) => props.updateSearch(e)} />
                <i className="search icon" />
            </div>
        </div>
    )
}

export default FilterBar