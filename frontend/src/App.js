import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Timeline from './components/Timeline';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white text-gray-900 font-sans">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Timeline />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
