import React, { useState } from "react"

function SearchInfo({ searchedBooks, setActive, book }) {

    // console.log(searchedBooks)

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

    const [ showPic, setShowPic ] = useState(url)
    const [ showButton, setShowButton ] = useState(() => {
        if (url !== undefined) {
            return false
        } else {
            return true
        }
    })

    

    function handlePicture(e) {
        e.preventDefault()
        let url = prompt("Please enter photo URL.")
        if (url !== null) {
            let cover = new Image();
            cover.src = url
            
            return fetch(`http://localhost:3000/books/${book.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    "url": `${cover.src}`,
                })
            }).then(resp => resp.json())
            .then(setShowPic(!showPic))
            .then(setShowButton(!showButton))
            
        } else {

        }
    }

    return (
        <>
            <div class="ui card" id="card">
                <div class="image">
                    {showPic && (
                        <img src={book.url} alt={title} />
                    )}
                </div>
                <div class="content">
                    <div class="header">
                        {title}
                    </div>
                    {bookIsbn && (
                        <div class="meta">
                            <a>{bookIsbn}</a>
                        </div> 
                    )}
                    {bookAuthor && (
                        <div class="description">
                            {bookAuthor}
                        </div>
                    )}
                </div>
                <div class="exta content">
                    <span class="right floated">
                        {showButton && <button onClick={handlePicture} class="book-cover"> Add photo!</button>}
                    </span>
                </div>
            </div>
        </>
    )
}

export default SearchInfo;