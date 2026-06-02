import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Perfil from './components/perfil/Perfil'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Produto from './components/produto/produto'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/perfil" element={<Perfil />}/>
        <Route path="/produto" element={<Produto />}/>
      </Routes>
    </BrowserRouter>
  )
 }

export default App
