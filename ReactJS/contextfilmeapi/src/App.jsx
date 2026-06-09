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
import CadastroProduto from './components/cadastroproduto/CadastroProduto'
import ListarProduto from './components/listarproduto/ListarProduto'
import PrivateRoute from './routes/PrivateRoute'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"
          element={
            <Home />
          } />
        <Route path="/perfil"
          element={

            <Perfil />
          } />
        <Route path="/produto"
          element={
            <PrivateRoute>
              <Produto />

            </PrivateRoute>
          } />


        <Route path="/cadastrarProduto" element={
          <PrivateRoute>
            <CadastroProduto />
          </PrivateRoute>

        } />
        <Route path="/listarProduto"
          element={
            <PrivateRoute>
              <ListarProduto />
            </PrivateRoute>

          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
