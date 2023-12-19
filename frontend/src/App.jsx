

import LandingPage from './pages/Landing-pages';
import Login from './pages/login';
import Homestay from './pages/registrasi-homestay';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mitra from './pages/mitraPage';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Transportasi from './pages/regitsrasi-transportasi';
import WisataO from './pages/registrasi-wisata';









function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homest" element={<Homestay />} />
          <Route path="/mitra" element={<Mitra />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wisata" element={<WisataO />} />
          <Route path="/transportasi" element={<Transportasi />} />
          
        </Routes>
        
      </Router>
  </>
  )
}


export default App;