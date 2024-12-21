// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/user/signup';
import Login from './components/user/login';
import './App.css';
import HomePage from './components/landing_page/home';
import Decide from './components/landing_page/decide';
import AdminLogin from './components/admin/adminlogin';
const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>   
                    <Route path="/" element={<HomePage />} />           
                    <Route path="/userlogin" element={<Login />} />
                    <Route path="/usersignup" element={<Signup/>}/>
                    <Route path="/Decide" element={<Decide/>} />
                    <Route path="/adminlogin" element={<AdminLogin />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
