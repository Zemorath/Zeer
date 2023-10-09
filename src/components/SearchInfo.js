import React, { useState } from "react"

function SearchInfo({ searchedBooks, setActive }) {

    console.log(searchedBooks)
    return (
        <>
            <button className="ui negative basic button right floated" onClick={setActive([])}>Cancel Search</button>
            <div id="book-collection" className="ui link cards">{searchedBooks.map((book) => (
                <h1>Hello World</h1>
            ))}</div>
        </>
    )
}

export default SearchInfo;