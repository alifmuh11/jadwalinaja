import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="flex justify-center gap-8">
        <Link to="/" className="text-white font-semibold hover:underline">
          Beranda
        </Link>
        <Link to="/tambah" className="text-white font-semibold hover:underline">
          Tambah Jadwal
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
