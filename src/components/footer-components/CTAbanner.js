import React from 'react'
import PromptButton from '../featured-components/PromptButton'
export default function CTAbanner() {
    return (
        <div className='CTA-banner'>
            <div className="cta-content">
                <h2 style={{
                    fontSize: '12px',
                    fontWeight: '400',
                    lineHeight: '16px',
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    marginBottom: '4px'
                }}>A spotify clone</h2>
                <h3 style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '24px',
                    letterSpacing: 'normal',
                    textTransform: 'none'
                }}>Made With &hearts; By Akash Kanaujiya.
                <br />
                I have used some frontend UI components from third party. All the other functionality is build using
                Spotify official API.
                </h3>
            </div>
            <PromptButton to='https://spotify.com/signup' name='Sign up free' styleName='CTA'/>
        </div>
    )
}
