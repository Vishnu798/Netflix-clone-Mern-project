import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<SignIn/>}></Route>
        <Route exact path='/' element={<Netflix/>}></Route>
        <Route exact path='/player' element={<Player/>}></Route>
       
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App

