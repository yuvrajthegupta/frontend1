import React from 'react'
import { Register } from '../components/Register.jsx'
import { Button } from '@mui/material'
import { Login } from '../components/Login.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { SearchPage } from './SearchPage.jsx';

export const UserPage = () => {
  return (
    <>
    <Router>
        <div className='btns'>
    <Button id = 'b1' variant="outlined"><Link to='/register'> Register</Link></Button>
    <p></p>
    <Button id = 'b2' variant="outlined"><Link to='/login'>Login</Link></Button>
    <p></p>
    <Button id = 'b3' variant="outlined"><Link to='/home'>Home</Link></Button>
    <Button variant="outlined" href="https://medium.com/@yuvrajam12/about-this-project-162234632e86" target ="_blank">
  About
</Button>
    </div>
    <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<SearchPage/>}/>
    </Routes>
    </Router>
    
    {/* <Login/> */}
   </>
  )
}