import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Ranking } from '../components/ranking/Ranking';
import { Jugadores } from '../components/jugadores/Jugadores';
import { Historial } from '../components/historial/Historial';

export const Rutas = () => {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/ranking"/>}></Route>
                <Route path="*" element={<Navigate to="/ranking"/>}></Route>
                <Route path="/ranking" element={<Ranking />}></Route>
                <Route path="/jugadores" element={<Jugadores />}></Route>
                <Route path="/historial" element={<Historial />}></Route>
            </Routes>
        </BrowserRouter>
    )
}