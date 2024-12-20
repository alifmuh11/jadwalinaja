// DetailJadwal.js
import React from 'react';
import { useParams } from 'react-router-dom'; // Impor useParams untuk mengambil parameter dari URL
import jadwal from './data/jadwal.json';

function DetailJadwal() {
  const { id } = useParams(); // Ambil id dari URL
  const item = jadwal.find((j) => j.id === parseInt(id)); // Temukan jadwal berdasarkan id

  return (
    <div className="flex justify-center mt-12">
      {item ? (
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-blue-500">{item.mataKuliah}</h2>
          <p><strong>Waktu:</strong> {item.waktu}</p>
          <p><strong>Lokasi:</strong> {item.lokasi}</p>
          <p><strong>Catatan:</strong> {item.catatan}</p>
        </div>
      ) : (
        <p>Jadwal tidak ditemukan</p>
      )}
    </div>
  );
}

export default DetailJadwal;
