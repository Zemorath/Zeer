import React, { useState, useEffect } from "react";
import SearchInfo from "./SearchInfo";


function SearchPage({ setSearchTitle, setSearchAuthor, setSearchIsbn, searchedBooks, isActive, setActive, handleSearch }) {

    return (
        <div className="ui middle aligned center aligned grid">
            {isActive && searchedBooks.length == 0 && (
                <div className="column">
                    <h2 className="ui black header">
                        <div className="content">Add a book to your library</div>
                    </h2>
                    <form className="ui medium form" id="search" onSubmit={handleSearch}>
                        <div className="ui stacked segment">
                            <div className="field"> <h3>TITLE</h3>
                                <div className="ui left text input">
                                    <input type="text" name="title" placeholder="Title" onChange={(e) => setSearchTitle(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field"> <h3>AUTHOR</h3>
                                <div className="ui left text input">
                                    <input type="text" name="author" placeholder="Author" onChange={(e) => setSearchAuthor(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field"> <h3>ISBN</h3>
                                <div className="ui left text input">
                                    <input type="text" name="isbn" placeholder="ISBN" onChange={(e) => setSearchIsbn(e.target.value)}/>
                                </div>
                            </div>
                            <button className="ui fluid large black submit button" type="submit" >Search</button>
                        </div>
                    </form>
                </div>
            )}  
            {isActive && searchedBooks.length > 0 && (
                <>
                    <div>
                        <button className="ui negative basic button right floated">Cancel Search</button>
                    </div>
                    <div id="book-collection" className="ui link cards">{searchedBooks.map((book) => (
                        <SearchInfo book={book} key={book.id} />
                    ))}</div>
                </>
            )}  
        </div>
    )
}

export default SearchPage;