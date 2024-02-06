import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BarChart from "../../components/chart/Chart";

const LaporanPenjualan = () => {
  // sesionStorage
  let type = sessionStorage.getItem("type");
  console.log("ini type user", type);

  // react-router-dom
  const navigate = useNavigate();

  // usestate
  const [TanggalAwal, setTanggalAwal] = useState();
  const [TanggalAkhir, setTanggalAkhir] = useState();

  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <div className="w-1/5">
          <SideBar type={type} />
        </div>
        <div className="w-4/5">
          <div className="">
            <p className="text-4xl font-bold mt-3 text-center">
              Laporan Penjualan
            </p>
          </div>

          {/* filter */}
          <div className="ml-5 px-24 mt-16 flex">
            {/* tanggal awal */}
            <div className="mr-5">
              <p className="font-semibold mb-2 text-lg">Tanggal Awal</p>
              <div className="flex">
                <input
                  type="date"
                  name=""
                  onChange={(e) => setTanggalAwal(e.target.value)}
                  className="w-72 bg-gray-100 py-2 px-3 rounded-lg font-semibold"
                  value={TanggalAwal}
                  id=""
                />
              </div>
            </div>
            {/* tanggal akhir */}
            <div className="">
              <p className="font-semibold mb-2 text-lg">Tanggal Akhir</p>
              <div className="flex">
                <input
                  type="date"
                  name=""
                  onChange={(e) => setTanggalAkhir(e.target.value)}
                  className="w-72 bg-gray-100 py-2 px-3 rounded-lg font-semibold"
                  value={TanggalAkhir}
                  id=""
                />
                <div
                  onClick={() => filter(TanggalAkhir)}
                  className="bg-blue-300 w-36 py-2 ml-5 rounded-lg cursor-pointer hover:opacity-80"
                >
                  <p className="text-center font-semibold">Filter</p>
                </div>
              </div>
            </div>
          </div>

          {/* table laporan */}
          <div className="px-24 mt-10 h-48 overflow-y-scroll">
            <table className="table-auto w-full">
              <tr>
                <th className="border border-black w-1/4 py-2">ID Transaksi</th>
                <th className="border border-black w-1/4">Tanggal Transaksi</th>
                <th className="border border-black w-1/4">Total Pembayaran</th>
                <th className="border border-black w-1/4">Nama Kasir</th>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  03/06/2023 14:23
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 20.000
                </td>
                <td className="border border-black text-center font-semibold">
                  Hanif Jr
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  03/06/2023 14:23
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 20.000
                </td>
                <td className="border border-black text-center font-semibold">
                  Hanif Jr
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  03/06/2023 14:23
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 20.000
                </td>
                <td className="border border-black text-center font-semibold">
                  Hanif Jr
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  03/06/2023 14:23
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 20.000
                </td>
                <td className="border border-black text-center font-semibold">
                  Hanif Jr
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  03/06/2023 14:23
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 20.000
                </td>
                <td className="border border-black text-center font-semibold">
                  Hanif Jr
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  03/06/2023 14:23
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 20.000
                </td>
                <td className="border border-black text-center font-semibold">
                  Hanif Jr
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  03/06/2023 14:23
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 20.000
                </td>
                <td className="border border-black text-center font-semibold">
                  Hanif Jr
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  03/06/2023 14:23
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 20.000
                </td>
                <td className="border border-black text-center font-semibold">
                  Hanif Jr
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  03/06/2023 14:23
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 20.000
                </td>
                <td className="border border-black text-center font-semibold">
                  Hanif Jr
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  03/06/2023 14:23
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 20.000
                </td>
                <td className="border border-black text-center font-semibold">
                  Hanif Jr
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  03/06/2023 14:23
                </td>
                <td className="border border-black text-center font-semibold">
                  Rp. 20.000
                </td>
                <td className="border border-black text-center font-semibold">
                  Hanif Jr
                </td>
              </tr>
            </table>
          </div>

          {/* chart */}
          <div className="px-24 mt-10 flex">
            {/* <div className=""> */}
              <BarChart />
            {/* </div> */}
            <div className="ml-6">
              <div className="flex items-center">
                <div className="bg-blue-400 w-10 h-10 rounded-full"></div>
                <p className="font-semibold ml-5">Omset</p>
              </div>
              <div
                onClick={() => filter(TanggalAkhir)}
                className="bg-blue-300 w-36 py-2 mt-3 rounded-lg cursor-pointer hover:opacity-80"
              >
                <p className="text-center font-semibold">Generate</p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaporanPenjualan;
