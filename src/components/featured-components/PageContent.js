import React, { useContext } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import HomePage from '../pages-components/HomePage'
import SearchPage from '../pages-components/SearchPage'
import GenrePage from '../pages-components/GenrePage'
import PlayListPage from '../pages-components/PlayListPage'
import AlbumPage from '../pages-components/AlbumPage'
import UserPage from '../pages-components/UserPage'
import ArtistPage from '../pages-components/ArtistPage'
import CollectionPage from '../pages-components/CollectionPage'
import LikePage from '../pages-components/LikePage'

import { Tooltip as ReactToolTip } from 'react-tooltip'
import generateContent from '../../utilities/TipContent'
import { LoginContext } from '../../utilities/context'

export default function PageContent({ query, playlists, refreshPlaylist, message, status }) {
    const loggedIn = useContext(LoginContext);
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage query={query} />} />
                <Route path="/genre/:id" element={<GenrePage />} />
                <Route path="/playlist/:id" element={<PlayListPage playlists={playlists} refreshPlaylist={refreshPlaylist} />} />
                <Route path="/album/:id" element={<AlbumPage />} />
                <Route path="/user/:id" element={<UserPage />} />
                <Route path="/artist/:id" element={<ArtistPage />} />
                <Route path="/collection/*" element={<CollectionPage playlists={playlists} />} />
                <Route path="/tracks" element={<LikePage />} />
            </Routes>
            <div className={`status-bar-wrapper ${status ? 'active' : ''}`}>
                <div className={`status-bar ${status ? 'active' : ''}`}>{message}</div>
            </div>
            <ReactToolTip className='toolTip ttMain' id='tooltipMain' disable={loggedIn} place='bottom' effect='solid' backgroundColor='#2e77d0' globalEventOff='click' getContent={dataTip => generateContent(dataTip)} clickable={true} />
        </>
    );
};
