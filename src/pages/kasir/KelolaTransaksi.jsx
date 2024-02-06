import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KelolaTransaksi = () => {
  // sesionStorage
  let type = sessionStorage.getItem("type");
  console.log("ini type user", type);
  let isLoggedIn = sessionStorage.getItem("@isLoggedIn");

  // react-router-dom
  const navigate = useNavigate();

  // usestate
  const [Uang, setUang] = useState();
  const [kembalian, setKembalian] = useState();
  // form
  const [Menu, setMenu] = useState();
  const [Quantitas, setQuantitas] = useState();
  const [HargaSatuan, setHargaSatuan] = useState();
  const [TotalHarga, setTotalHarga] = useState();

  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <div className="w-1/5">
          <SideBar type={type} />
        </div>
        <div className="w-4/5">
          <div className="">
            <p className="text-4xl font-bold mt-3 ml-28">Form Kasir</p>
          </div>

          {/* form */}
          <div className="px-28 mt-10">
            <div className="flex">
              <div className="w-1/2 mr-10">
                <p className="font-semibold mb-1">Pilih Menu</p>
                <div
                  // onClick={handleOpen}
                  className="bg-gray-200 text-sm w-full py-2 rounded-md cursor-pointer px-3"
                >
                  <p className="">Kode - Nama Menu</p>
                </div>
              </div>
              <div className="w-1/2 ml-10">
                <p className="font-semibold mb-1">Quantitas</p>
                <input
                  type="number"
                  value={Quantitas}
                  onChange={(e) => setQuantitas(e.target.value)}
                  placeholder="Masukan Kuantitas"
                  className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
                />
              </div>
            </div>
            <div className="flex mt-3">
              <div className="w-1/2 mr-10">
                <p className="font-semibold mb-1">Harga Satuan</p>
                <input
                  type="text"
                  value={HargaSatuan}
                  onChange={(e) => setHargaSatuan(e.target.value)}
                  placeholder="Masukan Harga Satuan"
                  className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
                />
              </div>
              <div className="w-1/2 ml-10">
                <p className="font-semibold mb-1">Total Harga</p>
                <input
                  type="text"
                  value={TotalHarga}
                  onChange={(e) => setTotalHarga(e.target.value)}
                  placeholder="Masukan Nama Barang"
                  className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
                />
              </div>
            </div>
          </div>

          {/* tombol action */}
          <div className="px-28 mt-7">
            <div className="flex flex-row justify-end">
              <div className="w-40 bg-blue-300 py-2 mx-5 rounded-lg cursor-pointer hover:opacity-80">
                <p className="font-semibold text-center">Tambah</p>
              </div>
              <div className="w-40 bg-blue-300 py-2 rounded-lg cursor-pointer hover:opacity-80">
                <p className="font-semibold text-center">Reset</p>
              </div>
            </div>
          </div>

          {/* tabel */}
          <p className="px-24 mt-5 font-semibold">Keranjang</p>
          <div className="px-24 mt-3 h-36 overflow-y-scroll">
            <table className="table-auto w-full">
              <tr>
                <th className="border border-black w-1/6 py-2">ID Transaksi</th>
                <th className="border border-black w-1/6">Kode Barang</th>
                <th className="border border-black w-1/6">Nama Barang</th>
                <th className="border border-black w-1/6">Harga Satuan</th>
                <th className="border border-black w-1/6">Quantitas</th>
                <th className="border border-black w-1/6">Subtotal</th>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  JG10
                </td>
                <td className="border border-black text-center font-semibold">
                  KB9
                </td>
                <td className="border border-black text-center font-semibold">
                  Jersey Man City
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 70.000
                </td>
                <td className="border border-black text-center font-semibold">
                  5
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 350.000
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  JG10
                </td>
                <td className="border border-black text-center font-semibold">
                  KB9
                </td>
                <td className="border border-black text-center font-semibold">
                  Jersey Man City
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 70.000
                </td>
                <td className="border border-black text-center font-semibold">
                  5
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 350.000
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  JG10
                </td>
                <td className="border border-black text-center font-semibold">
                  KB9
                </td>
                <td className="border border-black text-center font-semibold">
                  Jersey Man City
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 70.000
                </td>
                <td className="border border-black text-center font-semibold">
                  5
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 350.000
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  JG10
                </td>
                <td className="border border-black text-center font-semibold">
                  KB9
                </td>
                <td className="border border-black text-center font-semibold">
                  Jersey Man City
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 70.000
                </td>
                <td className="border border-black text-center font-semibold">
                  5
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 350.000
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  JG10
                </td>
                <td className="border border-black text-center font-semibold">
                  KB9
                </td>
                <td className="border border-black text-center font-semibold">
                  Jersey Man City
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 70.000
                </td>
                <td className="border border-black text-center font-semibold">
                  5
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 350.000
                </td>
              </tr>
            </table>
          </div>

          {/* total harga */}
          <div className="px-24 mt-7 w-full justify-between items-end flex">
            {/* form */}
            <div className="w-1/3">
              <div className="flex justify-between font-semibold text-lg">
                <p className="">
                  Total harga
                </p>
                <p className="">
                  Rp. 200.000
                </p>
              </div>
              <input
                type="text"
                value={Uang}
                onChange={(e) => setUang(e.target.value)}
                placeholder="Masukan Harga Satuan"
                className="py-2 rounded-md mt-2 w-full text-sm bg-gray-200 px-3"
              />
              <div className="bg-blue-300 py-2 w-full mt-3 rounded-md cursor-pointer hover:opacity-80">
                <p className="text-center font-semibold">Bayar</p>
              </div>
              <div className="font-semibold w-full mt-2 text-lg flex justify-between">
                <p className="">Kembalian</p>
                <p className="">Rp. 0</p>
              </div>
            </div>
            {/* action */}
            <div className="w-1/2 flex flex-row justify-end">
              <div className="w-40 bg-blue-300 py-2 mx-5 rounded-lg cursor-pointer hover:opacity-80">
                <p className="font-semibold text-center">Print</p>
              </div>
              <div className="w-40 bg-blue-300 py-2 rounded-lg cursor-pointer hover:opacity-80">
                <p className="font-semibold text-center">Simpan</p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default KelolaTransaksi;
