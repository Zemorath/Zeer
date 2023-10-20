import React, { useState } from "react"
import { useHistory } from "react-router-dom";

function SearchInfo({ setActive, book, libraryBooks, setLibrary, setBooks }) {

    const history = useHistory();

    const { title, author_name, isbn, url } = book

    const [ bookAuthor, setAuthor ] = useState(() => {
        if (author_name === undefined) {
            return false
        } else {
            return author_name[0]
        }
    })

    const [ bookIsbn, setIsbn ] = useState(() => {
        if (isbn === undefined) {
            return false
        } else {
            return isbn[0]
        }
    })


    function handleAdd() {
        const newBook = {
            title: title,
            author: bookAuthor,
            isbn: bookIsbn
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
                setBooks([])
            })
    }

    return (
        <>
            <div className="ui card" id="card" onClick={handleAdd}>
                <div className="content">
                    <div className="header">
                        {title}
                    </div>
                    {bookIsbn && (
                        <div className="meta">
                            <a>{bookIsbn}</a>
                        </div> 
                    )}
                    {bookAuthor && (
                        <div className="description">
                            {bookAuthor}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default SearchInfo;