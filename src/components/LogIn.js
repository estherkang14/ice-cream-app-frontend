import React from 'react';

const LogIn = (props) => {
    return (
        <div>
            <form className="ui form" onSubmit={(e) => {props.logIn(e)}}>
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