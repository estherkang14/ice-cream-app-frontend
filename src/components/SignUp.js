import React from 'react';

const SignUp = () => {
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