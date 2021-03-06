import React from 'react';

const SignUp = (props) => {
    return (
        <div className="ui center aligned container">
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
                        <input type="checkbox" name="store-owner" checked={null} onChange={(e) => props.setStoreOwner(e)} />
                        Are you a store owner?
                    </label>
                </div>
                <button type="submit" className="ui button">Submit</button> 
            </form>
        </div>
    )
}

export default SignUp