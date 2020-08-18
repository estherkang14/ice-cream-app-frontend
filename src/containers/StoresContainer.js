import React from 'react';
import Store from '../components/Store';
import FilterBar from '../components/FilterBar'
import StoreMap from '../components/StoreMap'

const StoresContainer = (props) => {
    return (
        <div className="container">
            <StoreMap stores={props.stores} />
            <FilterBar updateSearch={props.updateSearch} filterStores={props.filterStores}/>
            <br></br>
            <div className="ui centered cards">
                {props.stores.map(store => <Store store={store} key={store.id} />)}
            </div>
        </div>
    )
}

export default StoresContainer