import React, { useState, useEffect } from "react";
import Header from "./Header";
import LibraryList from "./LibraryList";
import SearchPage from "./SearchPage";
import { BrowserRouter, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {

    const [libraryBooks, setLibrary] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/books`)
            .then((r) => r.json())
            .then((books) => setLibrary(books))
    }, [])

    return (
        <>
            <Route path="/">
                <Header />
                <LibraryList libraryBooks={libraryBooks}/>
            </Route>
            <Route path="/search">
                {/* <SearchPage /> */}
            </Route>
        </>
    )
}


export default App;