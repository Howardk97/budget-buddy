// Packages
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

// Components
import LoginSignUp from './components/LoginSignUp';
import Login from './elements/Login';
import SignUp from './elements/SignUp'


function App() {
  return (
    <Router>
      <Routes>
        <Route
        path="/"
        element={<LoginSignUp />}/>

        {/* <Route
        path="/login"
        element={<Login />}/>

        <Route
        path="/signup"
        element={<SignUp />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
