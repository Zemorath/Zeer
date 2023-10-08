import React, { useState, useEffect } from "react";
import Header from "./Header";
import LibraryList from "./LibraryList";
import SearchPage from "./SearchPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

    const [libraryBooks, setLibrary] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/books`)
            .then((r) => r.json())
            .then((books) => setLibrary(books))
    }, [])

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <LibraryList libraryBooks={libraryBooks}/>
                </Route>
                <Route path="/search">
                    <SearchPage />
                </Route>
            </Switch>
        </>
    )
}


export default App;