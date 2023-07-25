import React from 'react'
import { Audio, ThreeDots } from 'react-loader-spinner'

export default function Loading({ type }) {
    return (
        <div className='loading'>
            {type === 'app' ?
                <Audio
                    color='#1db954'
                />
                :
                <ThreeDots
                    color='#fff'
                />}
        </div>
    )
}
