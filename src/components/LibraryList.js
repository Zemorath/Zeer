import React, { useState, useEffect } from "react";
import BookInfo from "./BookInfo"

function LibraryList({ libraryBooks }) {
    return (
        <div id="book-collection" className="ui link cards">{libraryBooks.map((book) => (
            <BookInfo book={book} key={book.id} />
        ))}</div>
    )
}


export default LibraryList;