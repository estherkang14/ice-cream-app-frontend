import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="ui menu"> 
            <a className="item">My Profile</a>
            <a className="item" href="/">Stores</a>
            <div className="right menu">
                <div className="item">
                    <div className="ui button input">Log In</div>
                </div>
                <div className="item">
                    <div className="ui button input">Log Out</div>
                </div>
                <div className="item">
                    <div className="ui button input" ><a href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;