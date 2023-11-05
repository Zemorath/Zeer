import React, { useState } from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

function Header({ setSearch, setSort }) {

    const [ isActive, setActive ] = useState(false)

    function handleLibrarySearch(e) {
        setSearch(e.target.value)
    }

    function handleSort(e) {
        setSort(e.target.value)
    }

    return (
        <div className="ui container">
            <h1 className="ui centered header">Z  E  E  R</h1>
            <div className="ui large secondary inverted pointing menu">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'item')}>Home</NavLink>
                <NavLink to="/library" className={({ isActive }) => (isActive ? 'active' : 'item')}>Library</NavLink>
                <NavLink to="/search" className={({ isActive }) => (isActive ? 'active' : 'item')}>Add</NavLink>
                <div className="ui search box">
                    <a className="ui centered input">
                        <input type="text" placeholder="Search Library..." onChange={handleLibrarySearch}/>
                    </a>
                </div>
                <div className="right item">
                    <select className="ui dropdown" onChange={handleSort}>
                        <option default="Sort Books">All</option>
                        <option value="Title A-Z">Title A-Z</option>
                        <option value="Title Z-A">Title Z-A</option>
                        <option value="Author A-Z">Author A-Z</option>
                        <option value="Author Z-A">Author Z-A</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header;