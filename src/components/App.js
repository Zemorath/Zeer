import React, { useState, useEffect } from "react";
import Header from "./Header";
import LibraryList from "./LibraryList";
import AddBook from "./AddBook";
import Home from "./HomePage";
import { Route, Switch } from "react-router-dom";

function App() {

    const [libraryBooks, setLibrary] = useState([])

    const [ search, setSearch ] = useState('')
    const [ sort, setSort ] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/books`)
            .then((r) => r.json())
            .then((books) => setLibrary(books))
    }, [])


    return (
        <>
            <Header setSearch={setSearch} setSort={setSort}/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/search">
                    <AddBook 
                        libraryBooks={libraryBooks}
                        setLibrary={setLibrary}
                        />
                </Route>
                <Route exact path="/library">
                    <LibraryList libraryBooks={libraryBooks} setLibrary={setLibrary} search={search} sort={sort}/>
                </Route>
            </Switch>
        </>
    )
}


export default App;