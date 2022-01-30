import React from 'react';
import Nav from "./Nav";

const Layout = ({ children }) => (
    <div className="app">
        <Nav />
        { children }
    </div>
)

export default Layout;