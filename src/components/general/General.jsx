// Importar modulos
import React from 'react';
import { Header } from '../header/header.jsx';
import { Footer } from '../footer/footer.jsx';
import { Socialmedia } from '../socialmedia/Socialmedia.jsx';

// Importar estilos
import './index.css'
import './normalize.css'

export const General = () => {
  return (
    <>
      <div className='body-stars'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>

      <Header />

      <Socialmedia />

      <Footer />
    </>
  )
}