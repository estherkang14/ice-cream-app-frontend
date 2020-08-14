import React from 'react';

const FilterBar = props => {
    return (
        <div>
            <div className="ui search">
                <div className="ui icon input">
                    <input className="prompt" placeHolder="Search by Store Name" onChange={(e) => props.updateSearch(e)} />
                    <i className="search icon" />
                </div>
            </div>


            <label>
                Filter Search By:
                <select className="ui selection dropdown"> 
                    <option value="All">All</option>
                    <option value="Highest Rated">Highest Rated</option>
                    <option value="Most Reviews">Most Reviews</option>
                    <option>By Location</option>
                    <option value="Washington, D.C.">Washington D.C.</option>
                    
                </select>
            </label>

            <div role="listbox" aria-expanded="false" className="ui selection dropdown" tabindex="0">
                    <div aria-atomic="true" aria-live="polite" role="alert" className="divider default text">Filter Search By:</div>
                    <i area-hidden="true" className="dropdown icon" />
                    
                    
            </div>
        </div>
    )
}

export default FilterBar