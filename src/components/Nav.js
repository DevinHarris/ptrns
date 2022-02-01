import React from 'react';
import { Link } from 'react-router-dom';
import Search from "./Search";

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#" className="navbar__logo">ptrns.</a></li>
                <li><a href="#">Stories</a></li>
                <li><a href="#">Sources</a></li>
            </ul>
            <Search />
        </nav>
    )
}

export default Nav;