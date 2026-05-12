import { useState } from 'react'

import './App.css'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import CadastroFrutasPage from './pages/cadastrofrutas/cadastrofrutaspage'
function App() {
  
  return (
    <>
    <BrowserRouter> 
    <Header />
    <Routes>
    <Route element={<HomePage />} path="/"/>
    <Route element={<QuemSomosPage />} path="/quemsomos"/>
    <Route element={<CadastroFrutasPage />} path="/cadfrutas"/>
    </Routes>
    

    </BrowserRouter>
    </>
  );
}

export default App;
