import React, {useContext} from 'react';
import Icon from '../icons'
import {LoginContext, MessageContext} from '../../utilities/context'

//Component a little different than all the other nav items because it is a button and doesnt link to anything
function CreatePlaylist() {
    const loggedIn = useContext(LoginContext)
    const setMessage = useContext(MessageContext)

    return (
        <>
        {loggedIn? 
        <button className="create-button no-outline" onClick={() => setMessage('Sorry, I have not implemented this feature yet')}>
            <div className="playlist-icon">
                <Icon name='Create' />
            </div>
            <span className="featured-label">Create Playlist</span>
        </button>
        :
                <button className="create-button no-outline" data-tip='create' data-for='tooltip' data-event='click' onClick={() => setMessage('Sorry, I have not implemented this feature yet')}>
            <div className="playlist-icon">
                <Icon name='Create' />
            </div>
            <span className="featured-label">Create Playlist</span>
        </button>}
        </>
    );
}

export default CreatePlaylist;
