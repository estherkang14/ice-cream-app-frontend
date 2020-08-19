import React from 'react';

const StoreForm = (props) => {
    return (
        <div className="ui center aligned container">  
            <h3>Add a Store!</h3>
            <br></br>
            <form className="ui form" onSubmit={(e) => props.postStore(e)}>
                <div className="field">
                    <label>Store Name:</label>
                    <input name="text" placeholder="e.g. 'Scoop-y Doo'" 
                    onChange={(e) => props.storeName(e)}></input>
                </div>

                <div className="field">
                    <label>Location:</label>
                    <input name="text" placeholder="e.g. Washington, DC"  
                    onChange={(e) => props.storeLocation(e)}></input>
                </div>

                <button type="submit" className="ui button">
                    Submit</button>
            </form>
        </div>
    )
}

export default StoreForm