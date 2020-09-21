import React from 'react';
import logo from './icecream.png'

const NavBar = (props) => {
    return (
        <div className="ui menu"> 
            <div className="item" style={{padding: '6px', width: '55px'}}>
                <img src={logo} alt="find my ice cream logo" style={{width: '45px'}} />
            </div>  
            <a className="item menu-item" onClick={() => props.loginCheck()}>My Profile</a>
            <a className="item menu-item" href="/">Stores</a>
            <div className="right menu">
           

                <a className="item menu-item" href="/login">Log In</a>

                <a className="item menu-item" href="/signup">Sign Up</a>
            </div>
        </div>
    )
}

export default NavBar;

