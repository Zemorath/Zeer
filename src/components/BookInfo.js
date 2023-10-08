import React, {useState, useEffect} from "react";

function BookInfo({ book }) {
    const { title, author, isbn, url } = book;

    const [ showPic, setShowPic ] = useState(url)
    const [ showButton, setShowButton ] = useState(() => {
        if (url !== undefined) {
            return false
        } else {
            return true
        }
    })

    

    function handlePicture() {
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
        
        <div class="card">
            <div class="image">
                {showPic && (
                    <img src={url} alt={title} />
                )}
            </div>
            <div class="content">
                <div class="header">
                    {title}
                </div>
                <div class="meta">
                    <a>{isbn}</a>
                </div>
                <div class="description">
                    {author}
                </div>
            </div>
            <div class="exta content">
                <span class="right floated">
                    {showButton && <button onClick={handlePicture} class="book-cover"> Add photo!</button>}
                </span>
            </div>
        </div>
    
    )
}


export default BookInfo;