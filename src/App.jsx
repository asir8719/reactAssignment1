import React from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Account from './components/Account'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/account' element={<Account/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App