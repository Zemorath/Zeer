import React, { useState, useEffect } from "react";
import BookInfo from "./BookInfo"

function LibraryList({ libraryBooks, search }) {

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

    return (
        <div id="book-collection" className="ui link cards">{filteredBooks.map((book) => (
            <BookInfo book={book} key={book.id} />
        ))}</div>
    )
}


export default LibraryList;