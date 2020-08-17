import React from 'react';
import Store from '../components/Store';
import FilterBar from '../components/FilterBar'

const StoresContainer = (props) => {
    return (
        <div className="container">
            <FilterBar updateSearch={props.updateSearch} filterStores={props.filterStores}/>
            <br></br>
            <div className="ui centered cards">
                {props.stores.map(store => <Store store={store} key={store.id} />)}
            </div>
        </div>
    )
}

export default StoresContainer