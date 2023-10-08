import React from "react";


function SearchPage() {
    return (
        <div class="ui middle aligned center aligned grid">
            <div class="column">
                <h2 class="ui black header">
                    <div class="content">Add a book to your library</div>
                </h2>
                <form class="ui medium form">
                    <div class="ui stacked segment">
                        <div class="field"> <h3>TITLE</h3>
                            <div class="ui left text input">
                                <input type="text" name="title" placeholder="Title" />
                            </div>
                        </div>
                        <div class="field"> <h3>AUTHOR</h3>
                            <div class="ui left text input">
                                <input type="text" name="author" placeholder="Author" />
                            </div>
                        </div>
                        <div class="field"> <h3>ISBN</h3>
                            <div class="ui left text input">
                                <input type="text" name="isbn" placeholder="ISBN" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchPage;