import React from 'react';

const NavBar = (props) => {
    return (
        <div className="ui menu"> 
            <a className="item" href="my-profile">My Profile</a>
            <a className="item" href="/">Stores</a>
            <div className="right menu">
           
                <div className="item">
                    <div className="ui button input"><a href="/login">Log In</a></div>
                </div> 

                <div className="item">
                    <div className="ui button input" ><a href="/signup">Sign Up</a></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;