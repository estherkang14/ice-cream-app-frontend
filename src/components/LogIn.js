import React from 'react';

const LogIn = (props) => {
    return (
        <div className="ui center aligned container">
            <form className="ui form" onSubmit={(e) => {props.logIn(e)}}>
                <div className="field">
                    <label>Username</label>
                    <input placeholder="Username" name="username" onChange={(e) => props.setUsername(e)}/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input placeholder="Password" type="password" name="password" onChange={(e) => props.setPassword(e)}/>
                </div>
                <button type="submit" className="ui button">Submit</button> 
            </form>
        </div>
    )
}

export default LogIn