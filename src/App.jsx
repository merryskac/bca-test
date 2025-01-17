import React, { useState, useEffect } from "react";
import FormPengajuan from "./FormPengajuan";
import TabelPengajuan from "./TabelPengajuan";

const App = () => {
  const [pengajuan, setPengajuan] = useState([]);

  // Load data dari localStorage saat aplikasi dimuat
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("pengajuan")) || [];
    setPengajuan(savedData);
  }, []);

  // Simpan data ke localStorage saat pengajuan diperbarui
  useEffect(() => {
    localStorage.setItem("pengajuan", JSON.stringify(pengajuan));
  }, [pengajuan]);

  // Tambahkan data pengajuan baru
  const handleTambahPengajuan = (dataBaru) => {
    setPengajuan([...pengajuan, dataBaru]);
  };

  return (
    <div>
      <h1>Aplikasi Pengajuan</h1>
      <FormPengajuan onTambahPengajuan={handleTambahPengajuan} />
      <TabelPengajuan data={pengajuan} />
    </div>
  );
};

export default App;

