import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogActivity = () => {
  // sesionStorage
  let type = sessionStorage.getItem("type");
  console.log("ini type user", type);

  // react-router-dom
  const navigate = useNavigate();

  // usestate
  const [Tanggal, setTanggal] = useState();

  // function
  const filter = () => {};

  console.log("ini tangal", Tanggal);

  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <div className="w-1/5">
          <SideBar type={type} />
        </div>
        <div className="w-4/5">
          <div className="">
            <p className="text-4xl font-bold mt-3 text-center">Log Activity</p>
          </div>

          {/* filter */}
          <div className="ml-5 mt-16">
            <p className="font-semibold mb-2 text-lg">Pilih Tanggal</p>
            <div className="flex">
              <input
                type="date"
                name=""
                onChange={(e) => setTanggal(e.target.value)}
                className="w-72 bg-gray-100 py-2 px-3 rounded-lg font-semibold"
                value={Tanggal}
                id=""
              />
              <div
                onClick={() => filter(Tanggal)}
                className="bg-blue-300 w-36 py-2 ml-5 rounded-lg cursor-pointer hover:opacity-80"
              >
                <p className="text-center font-semibold">Filter</p>
              </div>
            </div>
          </div>

          {/* tabel log-activity */}
          <div className="px-24 mt-10 h-96 overflow-y-scroll">
            <table className="table-auto w-full">
              <tr>
                <th className="border border-black w-2/12 py-2">ID Log</th>
                <th className="border border-black w-3/12">UserName</th>
                <th className="border border-black w-4/12">Waktu</th>
                <th className="border border-black w-3/12">Aktifitas</th>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">1</td>
                <td className="border border-black text-center font-semibold">Admin</td>
                <td className="border border-black text-center font-semibold">03/06/2023 14:23</td>
                <td className="border border-black text-center font-semibold">Login</td>
              </tr>
            </table>
          </div>


        </div>
      </div>
    </>
  );
};

export default LogActivity;
