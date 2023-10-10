import React, { useState, useEffect } from "react";
import Header from "./Header";
import LibraryList from "./LibraryList";
import SearchPage from "./SearchPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

    const [libraryBooks, setLibrary] = useState([])

    const [ titleInput, setSearchTitle ] = useState('')
    const [ authorInput, setSearchAuthor ] = useState('')
    const [ isbnInput, setSearchIsbn ] = useState('')
    const [ searchedBooks, setBooks ] = useState([])

    const [ search, setSearch ] = useState('')
    const [ sort, setSort ] = useState('')
    

    const [ isActive, setActive ] = useState(() => {
        if (searchedBooks.length > 0) {
            return false;
        } else {
            return true
        }
    })

    useEffect(() => {
        fetch(`http://localhost:3000/books`)
            .then((r) => r.json())
            .then((books) => setLibrary(books))
            .then(setActive(true))
    }, [])


    function handleSearch(e) {
        e.preventDefault()
        let search = (() => {
            if (isbnInput !== '') {
                return isbnInput
            } else if ( titleInput !== '') {
                return titleInput
            } else {
                return authorInput
            }
        })();

        fetch(`https://openlibrary.org/search.json?q=${search}`)
            .then((r) => r.json())
            .then((searchedBooks) => setBooks(searchedBooks.docs))
    }


    return (
        <>
            <Header setSearch={setSearch} setSort={setSort}/>
            <Switch>
                <Route exact path="/">
                    <LibraryList libraryBooks={libraryBooks} setLibrary={setLibrary} search={search} sort={sort}/>
                </Route>
                <Route path="/search">
                    <SearchPage 
                        setSearchTitle={setSearchTitle} 
                        setSearchAuthor={setSearchAuthor} 
                        setSearchIsbn={setSearchIsbn} 
                        searchedBooks={searchedBooks} 
                        isActive={isActive}
                        setActive={setActive}
                        handleSearch={handleSearch}
                        libraryBooks={libraryBooks}
                        setLibrary={setLibrary}
                        setBooks={setBooks}/>
                </Route>
            </Switch>
        </>
    )
}


export default App;