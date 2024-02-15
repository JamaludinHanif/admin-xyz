import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../config/api";
import moment from "moment";
import { message } from "antd";

const SideBar = (type) => {
  // react-router-dom
  const navigate = useNavigate();

  // console.log("dari sidebar", type.type);

  // SESSIONSTORAGE
  const username = sessionStorage.getItem("username");

  // request body
  const body = {
    waktu: moment().format("YYYY-MM-DD HH:mm:ss"),
    aktivitas: "logout",
    username: username,
  };

  //   function
  const logout = async () => {
    await axios
      .post(`${API.BASE_URL}/logs`, body)
      .then((response) => {
        console.log("response dari api logout", response?.data);
        if (response?.data?.status == true) {
          sessionStorage.clear();
          navigate("/");
          message.success("logout berhasil");
        } else {
          message.info("logout gagal");
        }
      })
      .catch((error) => {
        console.error("terjadi kesalahan", error);
      });
  };

  return (
    <>
      <div className="h-screen w-full bg-blue-200 ">
        <div className="">
          {/* nama user */}
          <div className="font-semibold text-center pt-4 text-4xl">
            {type.type === "gudang" ? (
              <>
                <p>Gudang</p>
              </>
            ) : type.type == "kasir" ? (
              <>
                <p>Kasir</p>
              </>
            ) : type.type == "admin" ? (
              <>
                <p
                  onClick={() => navigate("/login-activity")}
                  className="cursor-pointer"
                >
                  Admin
                </p>
              </>
            ) : (
              <></>
            )}
          </div>

          {/* foto */}
          <div className="">
            <img
              src="https://www.perawatku.id/img/Group%20341.png"
              alt=""
              className="h-40 m-auto mt-5 w-h-40"
            />
          </div>

          {/* other */}
          {type.type === "gudang" ? (
            <>
              <div className="font-semibold text-center pt-32 text-3xl">
                <p className="">Kelola</p>
                <p className="">Gudang</p>
              </div>
            </>
          ) : type.type == "kasir" ? (
            <>
              <div className="font-semibold text-center pt-32 text-3xl">
                <p className="">Kelola</p>
                <p className="">Transaksi</p>
              </div>{" "}
            </>
          ) : type.type == "admin" ? (
            <>
              <div
                onClick={() => navigate("/kelola-user")}
                className="w-3/5 bg-blue-400 m-auto rounded-md mt-24 mb-3 py-2 cursor-pointer hover:opacity-85"
              >
                <p className="text-center font-semibold">Kelola User</p>
              </div>{" "}
              <div
                onClick={() => navigate("/laporan-penjualan")}
                className="w-3/5 bg-blue-400 m-auto rounded-md mb-3 py-2 cursor-pointer hover:opacity-85"
              >
                <p className="text-center font-semibold">Kelola Laporan</p>
              </div>{" "}
              <div
                onClick={() => logout()}
                className="w-3/5 bg-blue-400 m-auto rounded-md py-2 cursor-pointer hover:opacity-85"
              >
                <p className="text-center font-semibold">Logout</p>
              </div>
            </>
          ) : (
            <></>
          )}
          {/* logout */}
          {type.type == "gudang" ? (
            <>
              <div
                onClick={() => logout()}
                className="w-3/5 bg-blue-400 m-auto mt-28 rounded-md py-2 cursor-pointer hover:opacity-85"
              >
                <p className="text-center font-semibold">Logout</p>
              </div>
            </>
          ) : type.type == "kasir" ? (
            <>
              <div
                onClick={() => logout()}
                className="w-3/5 bg-blue-400 m-auto mt-28 rounded-md py-2 cursor-pointer hover:opacity-85"
              >
                <p className="text-center font-semibold">Logout</p>
              </div>
            </>
          ) : type.type == "admin" ? (
            <></>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default SideBar;
