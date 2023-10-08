import React, { useState } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

function Header() {

    const [ isActive, setActive ] = useState(false)

    return (
        <div className="ui container">
            <h1 className="ui centered header">Z  E  E  R</h1>
            <div className="ui large secondary inverted pointing menu">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'item')}>Library</NavLink>
                <NavLink to="/search" className={({ isActive }) => (isActive ? 'active' : 'item')}>Search</NavLink>
                <div className="ui search box">
                    <a className="ui centered input">
                        <input type="text" placeholder="Search Library..." />
                    </a>
                </div>
                <div className="right item">
                    <a className="item">Sort By:</a>
                </div>
            </div>
        </div>
    )
}

export default Header;