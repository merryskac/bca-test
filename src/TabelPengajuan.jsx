import React from "react";

// eslint-disable-next-line react/prop-types
const TabelPengajuan = ({ data }) => {
  const handleApprove = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, approved: "true" } : item
    );
    console.log(updatedData);
    // setApproved(updatedData);
  };

  return (
    <table border="1" style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>NIK</th>
          <th>Nama</th>
          <th>Tanggal Lahir</th>
          <th>Status Perkawinan</th>
          <th>Data Pasangan</th>
          <th>Data Kendaraan</th>
          <th>Data Pinjaman</th>
          <th>approved</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item) => (
            <tr key={item.nik}>
              <td>{item.nik}</td>
              <td>{item.nama}</td>
              <td>{item.tanggalLahir}</td>
              <td>{item.statusPerkawinan}</td>
              <td>{item.dataPasangan}</td>
              <td>{item.dataKendaraan}</td>
              <td>{item.dataPinjaman}</td>
              <td>{item.approved}</td>
              <td>
                <button onClick={() => handleApprove(item.id)}>Approved</button>
                <button>print</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">Belum ada pengajuan</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TabelPengajuan;

