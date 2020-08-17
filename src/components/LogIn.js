import React from 'react';

const LogIn = () => {
    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label>Username</label>
                    <input placeholder="Username" name="username"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input placeholder="Password" name="password" />
                </div>
                <button type="submit" className="ui button">Submit</button> 
            </form>
        </div>
    )
}

export default LogIn