import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const FormPengajuan = ({ onTambahPengajuan, setApproved }) => {
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [statusPerkawinan, setStatusPerkawinan] = useState("");
  const [dataPasangan, setdataPasangan] = useState("");
  const [dataKendaraan, setdataKendaraan] = useState("");
  const [dataPinjaman, setdataPinjaman] = useState("");
  const [approved, setapproved] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nama || !nik || !tanggalLahir || !statusPerkawinan) {
      alert("Semua kolom harus diisi!");
      return;
    }

    const dataBaru = {
      nik,
      nama,
      tanggalLahir,
      statusPerkawinan,
      dataPasangan,
      dataKendaraan,
      dataPinjaman,
      approved,
    };

    onTambahPengajuan(dataBaru);

    // Reset form
    setNik("");
    setNama("");
    setTanggalLahir("");
    setStatusPerkawinan("");
    setdataPasangan("");
    setdataKendaraan("");
    setdataPinjaman("");
    setApproved("false");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Data Konsumen</h1>
      <div>
        <label>NIK:</label>
        <input
          type="text"
          value={nik}
          onChange={(e) => setNik(e.target.value)}
        />
      </div>
      <div>
        <label>Nama:</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <div>
        <label>Tanggal Lahir:</label>
        <input
          type="date"
          value={tanggalLahir}
          onChange={(e) => setTanggalLahir(e.target.value)}
        />
      </div>
      <div>
        <label>Status Perkawinan:</label>
        <select
          value={statusPerkawinan}
          onChange={(e) => setStatusPerkawinan(e.target.value)}
        >
          <option value="">Pilih status perkawinan</option>
          <option value="Kawin">Kawin</option>
          <option value="Belum Kawin">Belum Kawin</option>
        </select>
      </div>
      <div>
        <label>Data Pasangan:</label>
        <textarea
          type="text"
          value={dataPasangan}
          onChange={(e) => setdataPasangan(e.target.value)}
        />
      </div>
      <div>
        <label>Data Kendaraan:</label>
        <textarea
          type="text"
          value={dataKendaraan}
          onChange={(e) => setdataKendaraan(e.target.value)}
        />
        <textarea
          type="text"
          value={dataPinjaman}
          onChange={(e) => setdataPinjaman(e.target.value)}
        />
      </div>
      <button type="submit">Ajukan</button>
    </form>
  );
};

export default FormPengajuan;

