import React, { useState } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

function Header() {

    const [ isActive, setActive ] = useState(false)

    return (
        <div class="ui container">
            <h1 class="ui centered header">Z  E  E  R</h1>
            <div class="ui large secondary inverted pointing menu">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'item')}>Library</NavLink>
                <NavLink to="/search" className={({ isActive }) => (isActive ? 'active' : 'item')}>Search</NavLink>
                <div class="ui search box">
                    <a class="ui centered input">
                        <input type="text" placeholder="Search Library..." />
                    </a>
                </div>
                <div class="right item">
                    <a class="item">Sort By:</a>
                </div>
            </div>
        </div>
    )
}

export default Header;