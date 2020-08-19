import React from 'react';

const StoreForm = (props) => {
    return (
        <div>  
            <h3>Add a Store!</h3>
            <br></br>
            <form className="ui form" onSubmit={(e) => props.postStore(e)}>
                <div className="field">
                    <label>Store Name:</label>
                    <textarea name="text" placeholder="e.g. 'Scoop-y Doo'"
                    onChange={(e) => props.storeName(e)}></textarea>
                </div>

                <div className="field">
                    <label>Location:</label>
                    <textarea name="text" placeholder="e.g. Washington, DC" onChange={(e) => props.storeLocation(e)}>
                    </textarea>
                </div>

                <button type="submit" className="ui button">
                    Submit</button>
            </form>
        </div>
    )
}

export default StoreForm