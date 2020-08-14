import React from 'react';

const FilterBar = props => {
    return (
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" onChange={console.log("edit")} />
                <i className="search icon" />
            </div>
        </div>
    )
}

export default FilterBar