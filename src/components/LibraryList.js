import React, { useState, useEffect } from "react";
import BookInfo from "./BookInfo"

function LibraryList({ libraryBooks, search, setLibrary }) {

    const filteredBooks = libraryBooks.filter((book) => {
        if (search == '') {
            return true
        } else {
            return (book.title.toLowerCase().includes(search.toLowerCase())) || 
            (book.author.toLowerCase().includes(search.toLowerCase())) || 
            (book.isbn.includes(search)) ||
            (book.status !== undefined && book.status.toLowerCase().includes(search.toLowerCase()))
        }
    })

    function handleStatus(updatedBook) {
        const newBooks = libraryBooks.map((book) => {
            if (book.id === updatedBook.id) {
                return updatedBook
            } else {
                return book
            }
        })

        setLibrary(newBooks)
    }

    function handleDelete(deletedToy) {
        const newBooks = libraryBooks.filter((book) => book.id !== deletedToy.id)
        setLibrary(newBooks)
    }

    return (
        <div id="book-collection" className="ui link cards">{filteredBooks.map((book) => (
            <BookInfo book={book} key={book.id} libraryBooks={libraryBooks} setLibrary={setLibrary} onUpdateStatus={handleStatus} onDeleteBook={handleDelete}/>
        ))}</div>
    )
}


export default LibraryList;