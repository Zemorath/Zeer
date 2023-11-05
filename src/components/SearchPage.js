import React, { useState } from "react";
import { useHistory } from "react-router-dom"


function SearchPage({ isActive, setActive, libraryBooks, setLibrary }) {

    const [ titleInput, setSearchTitle ] = useState('')
    const [ authorInput, setSearchAuthor ] = useState('')
    const [ isbnInput, setSearchIsbn ] = useState('')
    

    const history = useHistory();

    function handleSearch(e) {
        e.preventDefault()

        const newBook = {
            title: titleInput,
            author: authorInput,
            isbn: isbnInput
        }

        fetch(`http://localhost:3000/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook)
        })
            .then((r) => r.json())
            .then((newBook) => {
                setLibrary([...libraryBooks, newBook]);
                history.push("/");
                setActive(true)
            })
    }
    

    return (
        <div className="ui middle aligned center aligned grid">
            {isActive && (
                <div className="column">
                    <h2 className="ui black header">
                        <div className="content">Add a book to your library</div>
                    </h2>
                    <form className="ui medium form" id="search" onSubmit={handleSearch}>
                        <div className="ui stacked segment">
                            <div className="field"> <h3>TITLE</h3>
                                <div className="ui left text input">
                                    <input type="text" name="title" placeholder="Title" value={titleInput} onChange={(e) => setSearchTitle(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field"> <h3>AUTHOR</h3>
                                <div className="ui left text input">
                                    <input type="text" name="author" placeholder="Author" value={authorInput} onChange={(e) => setSearchAuthor(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field"> <h3>ISBN</h3>
                                <div className="ui left text input">
                                    <input type="text" name="isbn" placeholder="ISBN" value={isbnInput} onChange={(e) => setSearchIsbn(e.target.value)}/>
                                </div>
                            </div>
                            <button className="ui fluid large black submit button" type="submit" >Search</button>
                        </div>
                    </form>
                </div>
            )}  
        </div>
    )
}

export default SearchPage;