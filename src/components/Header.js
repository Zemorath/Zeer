import React from "react";

function Header() {
    return (
        <div class="ui container">
            <h1 class="ui centered header">Z  E  E  R</h1>
            <div class="ui large secondary inverted pointing menu">
                <a class="active item">Library</a>
                <a class="item">Search</a>
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