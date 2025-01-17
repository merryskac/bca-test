import React, { useState, useEffect } from "react";
import FormPengajuan from "./FormPengajuan";
import TabelPengajuan from "./TabelPengajuan";

const App = () => {
  const [pengajuan, setPengajuan] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("pengajuan")) || [];
    setPengajuan(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("pengajuan", JSON.stringify(pengajuan));
  }, [pengajuan]);

  const handleTambahPengajuan = (dataBaru) => {
    setPengajuan([...pengajuan, dataBaru]);
  };

  return (
    <div>
      <h1>Aplikasi Pengajuan</h1>
      <FormPengajuan onTambahPengajuan={handleTambahPengajuan} />
      <TabelPengajuan data={pengajuan} setApproved={} />
    </div>
  );
};

export default App;

