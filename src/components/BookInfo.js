import React, {useState, useEffect} from "react";

function BookInfo({ book }) {
    const { title, author, isbn } = book;

    return (
        
        <div class="card">
            <div class="image">
                <></>
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
        </div>
    
    )
}


export default BookInfo;