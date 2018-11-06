import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <div className='header'>
            <div className='container'>
                <h2 className='header__title'>Recipe Book</h2>
                <NavLink style={{color: "white"}} to={{ pathname: "/" }}>Home</NavLink>
            </div>
        </div>
        
    </div>
)

export default Header;