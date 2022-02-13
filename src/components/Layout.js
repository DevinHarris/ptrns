import React from 'react';
import Nav from "./Nav";

const Layout = ({ children, setSearchTerm }) => (
    <div className="app">
        <Nav setSearchTerm={setSearchTerm} />
        { children }
    </div>
)

export default Layout;