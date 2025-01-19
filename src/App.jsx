import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IdeaBoard from './components/Body'
import Ideas from './components/Ideas'
import Navbar from './components/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'


function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/signin' element= {<Signin/>}/> 
        <Route path='/signup' element= {<Signup/>}/>
         <Route path='/ideas' element= {<IdeaBoard/>}/> 


      </Routes>
    </BrowserRouter>
    
   
    )
}

export default App
