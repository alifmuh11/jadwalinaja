// JadwalList.js
import React from 'react';
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import jadwal from './data/jadwal.json';

function JadwalList() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8">Daftar Jadwal Kuliah</h1>
      <div className="flex justify-center mt-8">
        <table className="table-auto border-collapse border border-gray-400 shadow-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border border-gray-400 px-6 py-3">No</th>
              <th className="border border-gray-400 px-6 py-3">Mata Kuliah</th>
              <th className="border border-gray-400 px-6 py-3">Waktu</th>
              <th className="border border-gray-400 px-6 py-3">Lokasi</th>
              <th className="border border-gray-400 px-6 py-3">Catatan</th>
              <th className="border border-gray-400 px-6 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {jadwal.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border border-gray-400 px-6 py-3">{index + 1}</td>
                <td className="border border-gray-400 px-6 py-3">{item.mataKuliah}</td>
                <td className="border border-gray-400 px-6 py-3">{item.waktu}</td>
                <td className="border border-gray-400 px-6 py-3">{item.lokasi}</td>
                <td className="border border-gray-400 px-6 py-3">{item.catatan}</td>
                <td className="border border-gray-400 px-6 py-3">
                  <Link to={`/detail/${item.id}`} className="text-blue-500 hover:underline">
                    Lihat Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JadwalList;
