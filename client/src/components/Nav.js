import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from "./Search";

const Nav = () => {
    const { searchTerm } = useSelector(state => state);

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" className="navbar__logo">ptrns.</Link></li>
                {/* <li><a href="#">Stories</a></li>
                <li><a href="#">Sources</a></li> */}
            </ul>
            <Search />
        </nav>
    )
}

export default Nav;