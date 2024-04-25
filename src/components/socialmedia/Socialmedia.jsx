import React from 'react'
import './socialmedia.css'

export const Socialmedia = () => {
    return (
        <div className='socialmedia-box'>
            <a href='https://www.twitch.tv/eljotita' target='_blank'>
                <img className='socialmedia-icon' src='../../src/assets/img/03-twitch.png' alt="Logo"></img>
            </a>
            <a href='https://discord.gg/PwnN9Qyd8H' target='_blank'>
                <img className='socialmedia-icon' src='../../src/assets/img/02-discord.png' alt="Logo"></img>
            </a>
            <a href='https://www.instagram.com/jotajotun/' target='_blank'>
                <img className='socialmedia-icon' src='../../src/assets/img/06-instagram.png' alt="Logo"></img>
            </a>
            <a href='https://www.youtube.com/@eljotita/videos' target='_blank'>
                <img className='socialmedia-icon' src='../../src/assets/img/07-youtube.png' alt="Logo"></img>
            </a>
        </div>
    )
}