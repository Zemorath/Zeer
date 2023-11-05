import React, {useState} from "react";

function BookInfo({ book, onUpdateStatus, onDeleteBook }) {
    const { title, author, isbn, url, status } = book;

    const [ showPic, setShowPic ] = useState(url)
    const [ showButton, setShowButton ] = useState(() => {
        if (url !== undefined) {
            return false
        } else {
            return true
        }
    })

    const [ showStatus, setStatus ] = useState(status)

    function handleStatus(e) {
        const currentStatus = e.target.value

        fetch(`http://localhost:3000/books/${book.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "status": currentStatus,
            })
        })    
        .then((r) => r.json())
        .then((book) => onUpdateStatus(book))
        

        setStatus(currentStatus)

    }

    function handleDelete() {
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() => onDeleteBook(book))
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
            .then(() => {
                setShowPic(!showPic)
                setShowButton(!showButton)})
            
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
            {showStatus == "To Read" && (
                <a class="ui violet ribbon label">To Read</a>
            )}
            {showStatus == "Reading" && (
                <a class="ui orange ribbon label">Reading</a>
            )}
            {showStatus == "Completed" && (
                <a class="ui green ribbon label">Completed</a>
            )}
            {showStatus == "Collectible" && (
                <a class="ui teal ribbon label">Collectible</a>
            )}
            {showStatus == "Dropped" && (
                <a class="ui brown ribbon label">Dropped</a>
            )}
            {showStatus == "On Hold" && (
                <a class="ui grey ribbon label">On Hold</a>
            )}
            <div class="exta content">
                <span class="right floated">
                    {showButton && <button onClick={handlePicture} class="book-cover"> Add photo!</button>}
                </span>
                <span class="right floated">
                    <button class="ui icon button" onClick={handleDelete}>
                        <i class="red trash icon"></i>
                    </button>
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