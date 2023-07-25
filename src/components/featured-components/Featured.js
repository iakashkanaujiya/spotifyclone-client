import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Headerbar from './Headerbar'
import PageContent from './PageContent'

import HistoryNav from './HistoryNav'
import UserPrompt from './UserPrompt'
import SearchBar from './SearchBar'
import UserInfo from './UserInfo'
import CollectionNav from './CollectionNav'


function Featured(props) {
    const loggedIn = props.loggedIn
    const [query, setQuery] = useState('')

    const resetQuery = () => {
        setQuery('')
    }

    return (
        <div className='featured'>
            <Headerbar>
                <HistoryNav />
                <Routes>
                    <Route path='/search' element={<SearchBar query={query} setQuery={setQuery} resetQuery={resetQuery} />} />
                    <Route path='/collection' element={<CollectionNav />} />
                </Routes>
                {loggedIn ? <UserInfo /> : <UserPrompt />}
            </Headerbar>
            <PageContent query={query} {...props} />
        </div>
    );
}

export default Featured;

