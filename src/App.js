// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import JadwalList from './JadwalList';
import TambahJadwal from './TambahJadwal';
import DetailJadwal from './DetailJadwal'; // Impor DetailJadwal

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<JadwalList />} />
          <Route path="/tambah" element={<TambahJadwal />} />
          <Route path="/detail/:id" element={<DetailJadwal />} /> {/* Tambahkan route untuk DetailJadwal */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
