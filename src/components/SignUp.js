import React from 'react';
import { Redirect } from 'react-router-dom'

const SignUp = (props) => {
    return (
        <div>
            <form className="ui form" onSubmit={(e) => props.signUp(e)} >
                <div className="field">
                    <label>Username</label>
                    <input placeholder="Username" name="username" onChange={(e) => props.setUsername(e)}/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input placeholder="Password" name="password" onChange={(e) => props.setPassword(e)} />
                </div>
                <div className="field">
                    <label>Location</label>
                    <input placeholder="Location (e.g. Washington DC)" name="location" onChange={(e) => props.setLocation(e)} />
                </div>
                <div className="field">
                    <label>
                        <input type="checkbox" name="store-owner" />
                        Are you a store owner?
                    </label>
                </div>
                <button type="submit" className="ui button">Submit</button> 
            </form>
        </div>
    )
}

export default SignUp