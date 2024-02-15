import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../config/api";
import { currencyFormatter } from "../../config/currencyFormatter";
import { message, Modal } from "antd";

const KelolaTransaksi = () => {
  // sesionStorage
  let type = sessionStorage.getItem("type");
  // console.log("ini type user", type);
  let isLoggedIn = sessionStorage.getItem("@isLoggedIn");

  // react-router-dom
  const navigate = useNavigate();

  // antd function
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  // usestate
  const [Uang, setUang] = useState();
  const [IsOpen, setIsOpen] = useState();
  const [kembalian, setKembalian] = useState(0);
  const [allProducts, setAllProducts] = useState();
  const [DataBarang, setDataBarang] = useState();
  const [FullData, setFullData] = useState();
  // form
  const [NamaProduk, setNamaProduk] = useState();
  const [Quantitas, setQuantitas] = useState();
  const [HargaSatuan, setHargaSatuan] = useState();
  const [TotalHarga, setTotalHarga] = useState();

  // functon selected barang
  const selectProduct = (data) => {
    setFullData(data);
    setNamaProduk(data?.nama_barang);
    setHargaSatuan(data?.harga_satuan);
  };

  let total = HargaSatuan * Quantitas;

  // console.log("ini harga total", TotalHarga);

  // function bayar
  const bayar = () => {
    if (Uang == undefined || Uang == 0) {
      setKembalian(0);
    } else if (Uang < total) {
      setKembalian(0);
      message.info("Uang anda kurang cokk");
    } else {
      let cashback = total - Uang;
      setKembalian(cashback);
    }
  };

  // function reset
  const reset = () => {
    setNamaProduk(undefined);
    setHargaSatuan(0);
    setQuantitas(0);
  };

  const getAllProducts = async () => {
    await axios
      .get(`${API.BASE_URL}/products`)
      .then((response) => {
        console.log("ini respons dari api users", response?.data);
        setAllProducts(response?.data?.data);
      })
      .catch((error) => {
        console.error("terjadi kesalahan", error);
      });
  };

  // function total data
  // const allData = (dataDB) => {
  let body = {
    fullData: FullData,
    namaBarang: NamaProduk,
    hargaSatuan: HargaSatuan,
    quantity: Quantitas,
    totalHarga: total,
    totalUang: Uang,
    kembalian: kembalian,
  };

  console.log("ini body data", body);
  // }

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
                <p className="font-semibold mb-1">Pilih Nama Produk</p>
                <div
                  onClick={() => {
                    handleOpen(), getAllProducts();
                  }}
                  className="bg-gray-200 text-sm w-full py-2 rounded-md cursor-pointer px-3"
                >
                  <p className="">
                    {NamaProduk == undefined ? (
                      <>Silahkan pilh barang</>
                    ) : (
                      <>{NamaProduk}</>
                    )}
                  </p>
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
                <div className="bg-gray-200 text-sm w-full py-2 rounded-md cursor-pointer px-3">
                  <p className="">
                    {Quantitas == undefined || Quantitas == 0 ? (
                      <>{currencyFormatter.format(0)}</>
                    ) : (
                      <>{currencyFormatter.format(total)}</>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* tombol action */}
          <div className="px-28 mt-7">
            <div className="flex flex-row justify-end">
              <div className="w-40 bg-blue-300 py-2 mx-5 rounded-lg cursor-pointer hover:opacity-80">
                <p className="font-semibold text-center">Tambah</p>
              </div>
              <div
                onClick={() => reset()}
                className="w-40 bg-blue-300 py-2 rounded-lg cursor-pointer hover:opacity-80"
              >
                <p className="font-semibold text-center">Reset</p>
              </div>
            </div>
          </div>

          {/* tabel */}
          <p className="px-24 mt-5 font-semibold">Keranjang</p>
          {/* {NamaProduk == undefined ? (
            <>
            
            </>
          )} */}
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
              {/*  */}
              {NamaProduk == undefined ? (
                <>
                  <p className="">silhakan pilih barang terkebibdahulu</p>
                </>
              ) : (
                <>
                  <tr>
                    <td className="border border-black py-2 text-center font-semibold">
                      {body.fullData?.id_barang}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {body.fullData?.kode_barang}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {body.namaBarang}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {body.hargaSatuan}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {body.quantity}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {Quantitas == undefined || Quantitas == 0 ? (
                        <>Rp. 0</>
                      ) : (
                        <>{body.totalHarga}</>
                      )}
                    </td>
                  </tr>
                </>
              )}
            </table>
          </div>

          {/* total harga */}
          <div className="px-24 mt-7 w-full justify-between items-end flex">
            {/* form */}
            <div className="w-1/3">
              <div className="flex justify-between font-semibold text-lg">
                <p className="">Total harga</p>
                <p className="">
                  {Quantitas == 0 || Quantitas == undefined ? (
                    <>{currencyFormatter.format(0)}</>
                  ) : (
                    <>{currencyFormatter.format(total)}</>
                  )}
                </p>
              </div>
              <input
                type="text"
                value={Uang}
                onChange={(e) => setUang(e.target.value)}
                placeholder="Masukan Jumlah Uang"
                className="py-2 rounded-md mt-2 w-full text-sm bg-gray-200 px-3"
              />
              <div
                onClick={() => bayar()}
                className="bg-blue-300 py-2 w-full mt-3 rounded-md cursor-pointer hover:opacity-80"
              >
                <p className="text-center font-semibold">Bayar</p>
              </div>
              <div className="font-semibold w-full mt-2 text-lg flex justify-between">
                <p className="">Kembalian</p>
                <p className="">{currencyFormatter.format(kembalian)}</p>
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

          <Modal
            title="Silahkan pilih Produk"
            open={IsOpen}
            footer={[]}
            onCancel={handleCancel}
          >
            {allProducts?.map((produk, index) => (
              <>
                <div
                  onClick={() => {
                    selectProduct(produk), handleCancel();
                  }}
                  className="border border-black w-1/2 m-auto rounded-lg py-1 mt-5 hover:opacity-80 cursor-pointer"
                >
                  <p className="font-semibold text-center">
                    {produk?.nama_barang}
                  </p>
                </div>
              </>
            ))}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default KelolaTransaksi;
