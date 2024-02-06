import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

const KelolaUser = () => {
  // sesionStorage
  let type = sessionStorage.getItem("type");
  console.log("ini type user", type);

  // react-router-dom
  const navigate = useNavigate();

  // usestate
  const [IsOpen, setIsOpen] = useState(false);
  const [Search, setSearch] = useState();
  // form state
  const [TypeUser, setTypeUser] = useState();
  const [Alamat, setAlamat] = useState();
  const [Nama, setNama] = useState();
  const [UserName, setUserName] = useState();
  const [Telepon, setTelepon] = useState();
  const [Password, setPassword] = useState();

  // antd function
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <div className="w-1/5">
          <SideBar type={type} />
        </div>
        <div className="w-4/5">
          <div className="">
            <p className="text-4xl font-bold mt-5 text-center">Kelola User</p>
          </div>

          {/* form */}
          <div className="px-28 mt-10">
            <div className="flex">
              <div className="w-1/2 mr-10">
                <p className="font-semibold mb-1">Tipe User</p>
                <div
                  onClick={handleOpen}
                  className="bg-gray-200 text-sm w-full py-2 rounded-md cursor-pointer px-3"
                >
                  <p className="">Gudang</p>
                </div>
              </div>
              <div className="w-1/2 ml-10">
                <p className="font-semibold mb-1">Alamat</p>
                <input
                  type="text"
                  value={Alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Masukan Alamat"
                  className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
                />
              </div>
            </div>
            <div className="flex mt-3">
              <div className="w-1/2 mr-10">
                <p className="font-semibold mb-1">Nama</p>
                <input
                  type="text"
                  value={Nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Masukan Nama"
                  className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
                />
              </div>
              <div className="w-1/2 ml-10">
                <p className="font-semibold mb-1">UserName</p>
                <input
                  type="text"
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Masukan UserName"
                  className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
                />
              </div>
            </div>
            <div className="flex mt-3">
              <div className="w-1/2 mr-10">
                <p className="font-semibold mb-1">Telepon</p>
                <input
                  type="text"
                  value={Telepon}
                  onChange={(e) => setTelepon(e.target.value)}
                  placeholder="Masukan Telepon"
                  className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
                />
              </div>
              <div className="w-1/2 ml-10">
                <p className="font-semibold mb-1">Password</p>
                <input
                  type="text"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukan Password"
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

          {/* search form */}
          <div className="px-28 mt-8 flex">
            <div className="w-4/12 mr-3">
              <input
                type="text"
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari....."
                className="py-2 rounded-md w-full text-sm bg-gray-200 px-3"
              />
            </div>
            <div className="w-24 bg-blue-300 py-2 rounded-lg cursor-pointer hover:opacity-80">
              <p className="font-semibold text-sm text-center">Carikan</p>
            </div>
          </div>

          {/* table */}
          <div className="px-24 mt-10 h-44 overflow-y-scroll">
            <table className="table-auto w-full">
              <tr>
                <th className="border border-black w-1/5 py-2">Id_User</th>
                <th className="border border-black w-1/5">Tipe_User</th>
                <th className="border border-black w-1/5">Nama_User</th>
                <th className="border border-black w-1/5">Alamat</th>
                <th className="border border-black w-1/5">Telepon</th>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  Admin
                </td>
                <td className="border border-black text-center font-semibold">
                  Jamaludin Hanif
                </td>
                <td className="border border-black text-center font-semibold">
                  Cikaso
                </td>
                <td className="border border-black text-center font-semibold">
                  085161310017
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  Admin
                </td>
                <td className="border border-black text-center font-semibold">
                  Jamaludin Hanif
                </td>
                <td className="border border-black text-center font-semibold">
                  Cikaso
                </td>
                <td className="border border-black text-center font-semibold">
                  085161310017
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  Admin
                </td>
                <td className="border border-black text-center font-semibold">
                  Jamaludin Hanif
                </td>
                <td className="border border-black text-center font-semibold">
                  Cikaso
                </td>
                <td className="border border-black text-center font-semibold">
                  085161310017
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  Admin
                </td>
                <td className="border border-black text-center font-semibold">
                  Jamaludin Hanif
                </td>
                <td className="border border-black text-center font-semibold">
                  Cikaso
                </td>
                <td className="border border-black text-center font-semibold">
                  085161310017
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  Admin
                </td>
                <td className="border border-black text-center font-semibold">
                  Jamaludin Hanif
                </td>
                <td className="border border-black text-center font-semibold">
                  Cikaso
                </td>
                <td className="border border-black text-center font-semibold">
                  085161310017
                </td>
              </tr>
              <tr>
                <td className="border border-black py-2 text-center font-semibold">
                  1
                </td>
                <td className="border border-black text-center font-semibold">
                  Admin
                </td>
                <td className="border border-black text-center font-semibold">
                  Jamaludin Hanif
                </td>
                <td className="border border-black text-center font-semibold">
                  Cikaso
                </td>
                <td className="border border-black text-center font-semibold">
                  085161310017
                </td>
              </tr>
            </table>
          </div>

          {/* modal antd */}
          <Modal
            title="Type User"
            open={IsOpen}
            footer={[]}
            // onOk={handleOk}
            onCancel={handleCancel}
          ></Modal>
        </div>
      </div>
    </>
  );
};

export default KelolaUser;
