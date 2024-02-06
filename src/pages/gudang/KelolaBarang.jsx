import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KelolaBarang = () => {
  // sesionStorage
  let type = sessionStorage.getItem("type");
  console.log("ini type user", type);

  // react-router-dom
  const navigate = useNavigate();

  // usestate
  const [Search, setSearch] = useState();
  // form
  const [KodeBarang, setKodeBarang] = useState();
  const [JumlahBarang, setJumlahBarang] = useState();
  const [NamaBarang, setNamaBarang] = useState();
  const [Satuan, setSatuan] = useState();
  const [Expired, setExpired] = useState();
  const [HargaSatuan, setHargaSatuan] = useState();

  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <div className="w-1/5">
          <SideBar type={type} />
        </div>
        <div className="w-4/5">
          <div className="">
            <p className="text-4xl font-bold mt-3 text-center">Kelola barang</p>
          </div>

          {/* form */}
          <div className="px-28 mt-10">
            <div className="flex">
              <div className="w-1/2 mr-10">
                <p className="font-semibold mb-1">Kode Barang</p>
                <input
                  type="text"
                  value={KodeBarang}
                  onChange={(e) => setKodeBarang(e.target.value)}
                  placeholder="Masukan Kode Barang"
                  className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
                />
              </div>
              <div className="w-1/2 mr-10">
                <p className="font-semibold mb-1">Jumlah Barang</p>
                <input
                  type="number"
                  value={JumlahBarang}
                  onChange={(e) => setJumlahBarang(e.target.value)}
                  placeholder="Masukan Jumlah Barang"
                  className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
                />
              </div>
            </div>
            <div className="flex mt-3">
              <div className="w-1/2 mr-10">
                <p className="font-semibold mb-1">Nama Barang</p>
                <input
                  type="text"
                  value={NamaBarang}
                  onChange={(e) => setNamaBarang(e.target.value)}
                  placeholder="Masukan Nama Barang"
                  className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
                />
              </div>
              <div className="w-1/2 mr-10">
                <p className="font-semibold mb-1">Satuan</p>
                <div
                  // onClick={handleOpen}
                  className="bg-gray-200 text-sm w-full py-2 rounded-md cursor-pointer px-3"
                >
                  <p className="">Botol</p>
                </div>
              </div>
            </div>
            <div className="flex mt-3">
              <div className="w-1/2 mr-10">
                <p className="font-semibold mb-1">Expired Date</p>
                <input
                  type="date"
                  value={Expired}
                  onChange={(e) => setExpired(e.target.value)}
                  placeholder="Masukan Tanggal"
                  className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
                />
              </div>
              <div className="w-1/2 mr-10">
                <p className="font-semibold mb-1">Harga Per Satuan</p>
                <input
                  type="number"
                  value={HargaSatuan}
                  onChange={(e) => setHargaSatuan(e.target.value)}
                  placeholder="Masukan Harga Satuan"
                  className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
                />
              </div>
            </div>
          </div>

          {/* tombol action */}
          <div className="px-28 mt-5">
            <div className="flex flex-row">
              <div className="w-40 bg-blue-300 py-2 rounded-lg cursor-pointer hover:opacity-80">
                <p className="font-semibold text-center">Tambah</p>
              </div>
              <div className="w-40 bg-blue-300 py-2 mx-5 rounded-lg cursor-pointer hover:opacity-80">
                <p className="font-semibold text-center">Edit</p>
              </div>
              <div className="w-40 bg-blue-300 py-2 rounded-lg cursor-pointer hover:opacity-80">
                <p className="font-semibold text-center">Hapus</p>
              </div>
            </div>
          </div>

          {/* tabel stock barang */}
          <div className="px-28 w-full mt-10 flex justify-between items-center">
            <p className="w-1/3 font-semibold text-xl">Tabel Stock Barang</p>

            <div className="w-1/3"></div>

            {/* search form */}
            <input
              type="text"
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari....."
              className="py-2 rounded-md w-1/3 text-sm bg-gray-200 px-3"
            />
          </div>

          <div className="px-28 mt-10 h-44 overflow-y-scroll">
            <table className="table-auto w-full">
              <tr>
                <th
                  style={{ width: "14%" }}
                  className="border border-black py-2"
                >
                  ID Barang
                </th>
                <th
                  style={{ width: "14%" }}
                  className="border border-black py-2"
                >
                  Kode Barang
                </th>
                <th
                  style={{ width: "14%" }}
                  className="border border-black py-2"
                >
                  Nama Barang
                </th>
                <th
                  style={{ width: "14%" }}
                  className="border border-black py-2"
                >
                  Expired Date
                </th>
                <th
                  style={{ width: "14%" }}
                  className="border border-black py-2"
                >
                  Jumlah
                </th>
                <th
                  style={{ width: "14%" }}
                  className="border border-black py-2"
                >
                  Satuan
                </th>
                <th
                  style={{ width: "14%" }}
                  className="border border-black py-2"
                >
                  Harga Satuan
                </th>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  CR7
                </td>
                <td className="border border-black text-center font-semibold">
                  LM10
                </td>
                <td className="border border-black text-center font-semibold">
                  Jersey Emyu
                </td>
                <td className="border border-black text-center font-semibold">
                  20/05/2007
                </td>
                <td className="border border-black text-center font-semibold">
                  101
                </td>
                <td className="border border-black text-center font-semibold">
                  Pcs
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 67.000
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  CR7
                </td>
                <td className="border border-black text-center font-semibold">
                  LM10
                </td>
                <td className="border border-black text-center font-semibold">
                  Jersey Emyu
                </td>
                <td className="border border-black text-center font-semibold">
                  20/05/2007
                </td>
                <td className="border border-black text-center font-semibold">
                  101
                </td>
                <td className="border border-black text-center font-semibold">
                  Pcs
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 67.000
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  CR7
                </td>
                <td className="border border-black text-center font-semibold">
                  LM10
                </td>
                <td className="border border-black text-center font-semibold">
                  Jersey Emyu
                </td>
                <td className="border border-black text-center font-semibold">
                  20/05/2007
                </td>
                <td className="border border-black text-center font-semibold">
                  101
                </td>
                <td className="border border-black text-center font-semibold">
                  Pcs
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 67.000
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  CR7
                </td>
                <td className="border border-black text-center font-semibold">
                  LM10
                </td>
                <td className="border border-black text-center font-semibold">
                  Jersey Emyu
                </td>
                <td className="border border-black text-center font-semibold">
                  20/05/2007
                </td>
                <td className="border border-black text-center font-semibold">
                  101
                </td>
                <td className="border border-black text-center font-semibold">
                  Pcs
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 67.000
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  CR7
                </td>
                <td className="border border-black text-center font-semibold">
                  LM10
                </td>
                <td className="border border-black text-center font-semibold">
                  Jersey Emyu
                </td>
                <td className="border border-black text-center font-semibold">
                  20/05/2007
                </td>
                <td className="border border-black text-center font-semibold">
                  101
                </td>
                <td className="border border-black text-center font-semibold">
                  Pcs
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 67.000
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default KelolaBarang;
