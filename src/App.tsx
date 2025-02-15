import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Admin from './pages/admin';
import Home from './pages/home';
import Login from './pages/login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
