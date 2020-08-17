import React from 'react';

const FilterBar = props => {
    return (
        <div>
            <div className="ui search">
                <div className="ui icon input">
                    <input className="prompt" placeholder="Search by Store Name" onChange={(e) => props.updateSearch(e)} />
                    <i className="search icon" />
                </div>
            </div>


            <label>
                
                <select className="ui selection dropdown" onChange={(e) => props.filterStores(e)}> 
                    <option>Filter Search:</option>
                    <option value="None">No filter</option>
                    <option value="Highest Rated">Highest Rated</option>
                    <option value="Alphabetically">Alphabetically</option>
                    <option value="Most Flavors">Most Flavors Offered</option>
                    <option>BY LOCATION</option>
                    <option value="Washington, DC">Washington DC</option>
                    <option value="Baltimore, MD">Baltimore, MD</option>
                    
                </select>
            </label>

            {/* <div role="listbox" aria-expanded="false" className="ui selection dropdown" tabIndex="0">
                    <div aria-atomic="true" aria-live="polite" role="alert" className="divider default text">Filter Search By:</div>
                    <i area-hidden="true" className="dropdown icon" />
                    
                    
            </div> */}
        </div>
    )
}

export default FilterBar