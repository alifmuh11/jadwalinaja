/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Mencakup semua file di folder src dengan ekstensi js, jsx, ts, atau tsx
  ],
  theme: {
    extend: {
      // Tambahkan kustomisasi tema di sini, misalnya warna atau font
      colors: {
        primary: "#4A90E2", // Contoh warna utama
        secondary: "#50E3C2" // Contoh warna sekunder
      }
    },
  },
  plugins: [
    // Tambahkan plugin Tailwind jika ada
  ],
};
