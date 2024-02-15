import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../../config/currencyFormatter";
import moment from "moment/moment";
import axios from "axios";
import { API } from "../../config/api";

const LogActivity = () => {
  // sesionStorage
  let type = sessionStorage.getItem("type");
  // console.log("ini type user", type);

  // react-router-dom
  const navigate = useNavigate();

  // usestate
  const [Tanggal, setTanggal] = useState(moment());
  const [DataLogs, setDataLogs] = useState();

  // function
  const filter = async (tanggal) => {
    await axios
    .get(`${API.BASE_URL}/logs/log?date=${tanggal} __:__:__`)
    .then((response) => {
      console.log('ini response api filter', response?.data)
      setDataLogs(response?.data?.data)
    })
    .catch((error) => {
      console.error('terjadi kesalahan', error)
    })
  };

  // get data
  const getAllLogs = async () => {
    await axios
      .get(`${API.BASE_URL}/logs`)
      .then((response) => {
        console.log("ini respons dari api getAllLogs", response?.data);
        setDataLogs(response?.data?.data);
      })
      .catch((error) => {
        console.error("terjadi kesalahan", error);
      });
  };

  const [currentTime, setCurrentTime] = useState(moment());

  // Update the current time every second
  setTimeout(() => {
    setCurrentTime(moment());
  }, 1000);

  let now = currentTime.format("DD/MM/YYYY HH.mm");

  // console.log("ini tangal", moment(Tanggal).format('YYYY-MM-DD'));

  useEffect(() => {
    getAllLogs();
  }, []);

  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <div className="w-1/5">
          <SideBar type={type} />
        </div>
        <div className="w-4/5">
          <div className="">
            <p className="text-4xl font-bold mt-3 text-center">Log Activity</p>
            {/* <p>{currentTime.format("DD/MM/YYYY HH.mm")}</p> */}
          </div>

          {/* filter */}
          <div className="ml-10 mt-16">
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
                onClick={() => filter(moment(Tanggal).format('YYYY-MM-DD'))}
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
              {DataLogs?.map((logs, index) => (
                <>
                  <tr key={logs?.id_log}>
                    <td className="border border-black py-2 text-center font-semibold">
                      {logs?.id_log}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {logs?.username}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {moment(logs?.waktu).format("DD/MM/YYYY HH.mm")}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {logs?.aktivitas}
                    </td>
                  </tr>
                </>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogActivity;
