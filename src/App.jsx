import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import LogActivity from "./pages/admin/LogActivity";
import KelolaUser from "./pages/admin/KelolaUser";
import LaporanPenjualan from "./pages/admin/LaporanPenjualan";
import KelolaBarang from "./pages/gudang/KelolaBarang";
import KelolaTransaksi from "./pages/kasir/KelolaTransaksi";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* admin */}
          <Route path="/login-activity" element={<LogActivity />} />
          <Route path="/kelola-user" element={<KelolaUser />} />
          <Route path="/laporan-penjualan" element={<LaporanPenjualan />} />
          {/* gudang */}
          <Route path="/kelola-barang" element={<KelolaBarang />} />
          {/* kasir */}
          <Route path="/kelola-transaksi" element={<KelolaTransaksi />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
