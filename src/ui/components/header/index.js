import React from 'react';

import './header.css';

const Header = (props) => {
    return (
        <nav className="navbar navbar-light bg-color">
            <a className="navbar-brand" href="#">
                <img src="../../../assets/images/avalith.png" width="30" height="30" alt="" />
            </a>
        </nav>
    )
}

export default Header;