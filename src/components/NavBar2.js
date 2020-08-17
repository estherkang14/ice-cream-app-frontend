import React from 'react';

const NavBar2 = (props) => {
    return (
        <div className="ui menu"> 
            <a className="item">My Profile</a>
            <a className="item" href="/">Stores</a>
            <div className="right menu">
           
               
                <div className="item">
                    <div className="ui button input" onClick={(e) => {props.logOut(e)}}>Log Out</div>
                </div> 
              
            </div>
        </div>
    )
}

export default NavBar2;