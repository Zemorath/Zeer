import React, { useState, useEffect } from "react";
import BookInfo from "./BookInfo"

function LibraryList({ libraryBooks, search, setLibrary, sort }) {

    const filteredBooks = libraryBooks.filter((book) => {
        if (search == '') {
            return true
        } else {
            return (book.title.toLowerCase().includes(search.toLowerCase())) || 
            (book.author.toLowerCase().includes(search.toLowerCase())) || 
            (book.isbn.includes(search)) ||
            (book.status !== undefined && book.status.toLowerCase().includes(search.toLowerCase()))
        }
    }).sort((a, b) => {
        if (sort === "All") return true;

        else if (sort === "Title A-Z") {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0
        }

        else if (sort === "Title Z-A") {
            if (a.title < b.title) return 1;
            if (a.title > b.title) return -1;
            return 0
        }

        else if (sort === "Author A-Z") {
            if (a.author < b.author) return -1;
            if (a.author > b.author) return 1;
            return 0
        }

        else if (sort === "Author Z-A") {
            if (a.author < b.author) return 1;
            if (a.author > b.author) return -1;
            return 0
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

    function handleDelete(deletedBook) {
        const newBooks = libraryBooks.filter((book) => book.id !== deletedBook.id)
        setLibrary(newBooks)
    }

    return (
        <div id="book-collection" className="ui link cards">{filteredBooks.map((book) => (
            <BookInfo book={book} key={book.id} onUpdateStatus={handleStatus} onDeleteBook={handleDelete}/>
        ))}</div>
    )
}


export default LibraryList;