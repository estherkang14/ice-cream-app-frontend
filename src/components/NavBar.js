import React from 'react';

const NavBar = (props) => {
    return (
        <div className="ui menu"> 
            {/* <a className="item" href="/my-profile">My Profile</a> */}
            <a className="item menu-item" onClick={() => props.loginCheck()}>My Profile</a>
            <a className="item menu-item" href="/">Stores</a>
            <div className="right menu">
           
                <div className="item menu-item">
                    <div className="ui button input"><a class="menu-item" href="/login">Log In</a></div>
                </div> 

                <div className="item menu-item">
                    <div className="ui button input" ><a class="menu-item" href="/signup">Sign Up</a></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

