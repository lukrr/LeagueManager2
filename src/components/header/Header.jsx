import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <header className='header-group'>
        <div className='header-box1'>
          <NavLink to='/ranking'>
            <img className='header-logo' src='../../src/assets/img/01-logo.png' alt='Logo'></img>
          </NavLink>
          <h1 className='header-title'>LeagueManager 2.0</h1>
        </div>
        <div className='header-box2'>
          <NavLink className="header-link" to='/ranking'>Ranking</NavLink>
          <NavLink className="header-link" to='/jugadores'>Jugadores</NavLink>
          <NavLink className="header-link" to='/historial'>Historial</NavLink>
        </div>
      </header>
    </>
  )
}