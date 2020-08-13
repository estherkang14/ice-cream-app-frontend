import React from 'react';
import SignUp from './SignUp';

const NavBar = () => {
    return (
        <div className="ui menu"> 
            <a className="item">My Profile</a>
            <a className="item">Stores</a>
            <div className="right menu">
                <div className="item">
                    <div className="ui button input">Log In</div>
                </div>
                <div className="item">
                    <div className="ui button input">Log Out</div>
                </div>
                <div className="item">
                    <div className="ui button input" >Sign Up</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;