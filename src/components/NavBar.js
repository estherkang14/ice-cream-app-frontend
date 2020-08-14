import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SignUp from './SignUp';

const NavBar = () => {
    return (
        <BrowserRouter>
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
                        <div className="ui button input" ><Link to="/signup">Sign Up </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path="/signup" component={SignUp} />
            </Switch>
        
        </BrowserRouter>
    )
}

export default NavBar;