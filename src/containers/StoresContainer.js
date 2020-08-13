import React from 'react';
import Store from '../components/Store';

const StoresContainer = (props) => {
    return (
        <div className="ui centered cards">
            {props.stores.map(store => <Store store={store} key={store.id} />)}
        </div>
    )
}

export default StoresContainer