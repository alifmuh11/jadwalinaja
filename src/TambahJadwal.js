// TambahJadwal.js
import React, { useState } from 'react';

function TambahJadwal({ onAddJadwal }) {
  const [mataKuliah, setMataKuliah] = useState('');
  const [waktu, setWaktu] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [catatan, setCatatan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddJadwal({ mataKuliah, waktu, lokasi, catatan });
    setMataKuliah('');
    setWaktu('');
    setLokasi('');
    setCatatan('');
  };

  return (
    <div className="flex justify-center mt-12">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-4 w-full max-w-md">
        <div>
          <label className="block font-semibold mb-2">Mata Kuliah</label>
          <input
            type="text"
            value={mataKuliah}
            onChange={(e) => setMataKuliah(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Waktu</label>
          <input
            type="text"
            value={waktu}
            onChange={(e) => setWaktu(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Lokasi</label>
          <input
            type="text"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Catatan</label>
          <textarea
            value={catatan}
            onChange={(e) => setCatatan(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Tambah Jadwal
        </button>
      </form>
    </div>
  );
}

export default TambahJadwal;
