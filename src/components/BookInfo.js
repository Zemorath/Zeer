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

    function handleStatus(e) {
        setStatus(e.target.value)
    }

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
            {status == "To Read" && (
                <a class="ui violet ribbon label">To Read</a>
            )}
            {status == "Reading" && (
                <a class="ui orange ribbon label">Reading</a>
            )}
            {status == "Completed" && (
                <a class="ui green ribbon label">Completed</a>
            )}
            {status == "Collectible" && (
                <a class="ui teal ribbon label">Collectible</a>
            )}
            {status == "Dropped" && (
                <a class="ui brown ribbon label">Dropped</a>
            )}
            {status == "On Hold" && (
                <a class="ui grey ribbon label">On Hold</a>
            )}
            <div class="exta content">
                <span class="right floated">
                    {showButton && <button onClick={handlePicture} class="book-cover"> Add photo!</button>}
                </span>
                <span class="left floated">
                    <select class="ui dropdown" onChange={handleStatus}>
                        <option value="Select">Select</option>
                        <option value="To Read">To Read</option>
                        <option value="Reading">Reading</option>
                        <option value="Completed">Completed</option>
                        <option value="Collectible">Collectible</option>
                        <option value="Dropped">Dropped</option>
                        <option value="On Hold">On Hold</option>
                    </select>
                </span>
            </div>
        </div>
    
    )
}


export default BookInfo;