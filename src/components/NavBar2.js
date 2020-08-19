import React from 'react';
import logo from './findnew.png'

const NavBar2 = (props) => {
    return (
        <div className="ui menu"> 
            <div className="item" style={{padding: 0, width: '50px'}}>
                <img src={logo} style={{width: '45px'}} />
            </div> 
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