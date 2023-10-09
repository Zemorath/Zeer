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

    const [ status, setStatus ] = useState("")

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
        
        <div class="ui card" id="card">
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
                <span class="left floated">
                    <select class="ui dropdown">
                        <option value="6">Select</option>
                        <option value="0">To Read</option>
                        <option value="1">Reading</option>
                        <option value="2">Completed</option>
                        <option value="3">Collectible</option>
                        <option value="4">Dropped</option>
                        <option value="5">On Hold</option>
                    </select>
                </span>
            </div>
        </div>
    
    )
}


export default BookInfo;