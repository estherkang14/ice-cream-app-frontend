import React from 'react';

const NavBar2 = (props) => {
    return (
        <div className="ui menu"> 
            <a className="item menu-item" href="/my-profile">My Profile</a>
            <a className="item menu-item" href="/">Stores</a>
            <div className="right menu">
           
               
                <div className="item menu-item">
                    <div className="ui button input menu-item" onClick={(e) => {props.logOut(e)}}>Log Out</div>
                </div> 
              
            </div>
        </div>
    )
}

export default NavBar2;