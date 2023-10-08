import React, { useState, useEffect } from "react";


function SearchPage() {

    const [ titleInput, setSearchTitle ] = useState('')
    const [ authorInput, setSearchAuthor ] = useState('')
    const [ isbnInput, setSearchIsbn ] = useState('')
    const [ searchedBooks, setBooks ] = useState([])

    function handleSearch() {

        let search = () => {
            if (isbnInput !== '') {
                return isbnInput
            } else if ( titleInput !== '') {
                return titleInput
            } else {
                return authorInput
            }
        }
        fetch(`https://openlibrary.org/search.json?q=${search}`)
            .then((r) => r.json())
            .then((searchedBooks) => console.log(searchedBooks))
    }

    // console.log(searchedBooks)

    return (
        <div className="ui middle aligned center aligned grid">
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
        </div>
    )
}

export default SearchPage;