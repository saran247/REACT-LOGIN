import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<SignUp />} /> {}
          <Route path='/login' element={<Login />} />     {}
          <Route path='/home' element={<Home />} />     {}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
