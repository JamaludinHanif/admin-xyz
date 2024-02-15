import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message, Modal } from "antd";
import { API } from "../../config/api";
import { currencyFormatter } from "../../config/currencyFormatter";
import moment from "moment";
import PdfDocument from "../../components/pdfDocument/PdfDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ActionPrint from "../../components/ReactPrint/ActionPrint";


const KelolaBarang = () => {
  // sesionStorage
  let type = sessionStorage.getItem("type");
  // console.log("ini type user", type);

  // react-router-dom
  const navigate = useNavigate();

  // usestate
  const [IsOpen, setIsOpen] = useState();
  const [Search, setSearch] = useState("");
  const [DataProduk, setDataProduk] = useState();
  const [IdProduk, setIdProduk] = useState();
  // form
  const [KodeBarang, setKodeBarang] = useState();
  const [JumlahBarang, setJumlahBarang] = useState();
  const [NamaBarang, setNamaBarang] = useState();
  const [Satuan, setSatuan] = useState();
  const [Expired, setExpired] = useState();
  const [HargaSatuan, setHargaSatuan] = useState();

  // console.log('ini input data', Expired)

  // antd function
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  // select product
  const selectProduct = (data) => {
    setIdProduk(data?.id_barang);
    setKodeBarang(data?.kode_barang);
    setNamaBarang(data?.nama_barang);
    setExpired(data?.expired_date);
    setJumlahBarang(data?.jumlah_barang);
    setSatuan(data?.satuan);
    setHargaSatuan(data?.harga_satuan);
  };

  const body = {
    kode_barang: KodeBarang,
    nama_barang: NamaBarang,
    expired_date: Expired,
    jumlah_barang: JumlahBarang,
    satuan: Satuan,
    harga_satuan: HargaSatuan,
  };

  const getAllProducts = async () => {
    await axios
      .get(`${API.BASE_URL}/products`)
      .then((response) => {
        console.log("ini respons dari api users", response?.data);
        setDataProduk(response?.data?.data);
      })
      .catch((error) => {
        console.error("terjadi kesalahan", error);
      });
  };

  const createNewProduct = async () => {
    if (
      KodeBarang == undefined ||
      NamaBarang == undefined ||
      Expired == undefined ||
      JumlahBarang == undefined ||
      Satuan == undefined ||
      HargaSatuan == undefined
    ) {
      message.info("Data tidak boleh ada yang kosong");
    } else {
      await axios
        .post(`${API.BASE_URL}/products`, body)
        .then((response) => {
          console.log("ini respons dari api users", response?.data);
        })
        .catch((error) => {
          console.error("terjadi kesalahan", error);
        });
    }
  };

  const updateProduk = async () => {
    await axios
      .patch(`${API.BASE_URL}/products?id=${IdProduk}`, body)
      .then((response) => {
        console.log("ini response dari api", response?.data);
        if (response?.data?.status == true) {
          location.reload();
        } else {
          message.error("gagal mengubah data");
        }
      })
      .catch((error) => {
        console.error("terjadi kesalahan", error);
      });
  };

  const deleteProduk = async () => {
    await axios
      .delete(`${API.BASE_URL}/products?id=${IdProduk}`)
      .then((response) => {
        console.log("ini response dari api", response?.data);
        if (response?.data?.status == true) {
          location.reload();
        } else {
          message.error("gagal menghapus data");
        }
      })
      .catch((error) => {
        console.error("terjadi kesalahan", error);
      });
  };

  const getProductByname = async (search) => {
    await axios
      .get(`${API.BASE_URL}/products/product?name=${search}`)
      .then((response) => {
        console.log("ini respons dari api users", response?.data);
        setDataProduk(response?.data?.data);
      })
      .catch((error) => {
        console.error("terjadi kesalahan", error);
      });
  };

  //   handle live seacrh
  const handleInputChange = (e) => {
    const search = e.target.value;
    setSearch(search);

    if (search !== "") {
      getProductByname(search);
    } else {
      getAllProducts();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    getAllProducts();
  }, []);

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
                  onClick={handleOpen}
                  className="bg-gray-200 text-sm w-full py-2 rounded-md cursor-pointer px-3"
                >
                  <p className="">
                    {Satuan == "botol" ? (
                      <>Botol</>
                    ) : Satuan == "kardus" ? (
                      <>Kardus</>
                    ) : Satuan == "pcs" ? (
                      <>Pcs</>
                    ) : (
                      <>Silahkan Pilih Jenis Satuan Barang</>
                    )}
                  </p>
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
              <div
                onClick={() => createNewProduct()}
                className="w-40 bg-blue-300 py-2 rounded-lg cursor-pointer hover:opacity-80"
              >
                <p className="font-semibold text-center">Tambah</p>
              </div>
              <div
                // onClick={() => handlePrint()}
                onClick={() => updateProduk()}
                className="w-40 bg-blue-300 py-2 mx-5 rounded-lg cursor-pointer hover:opacity-80"
              >
                <p className="font-semibold text-center">Edit</p>
              </div>
              <div
                onClick={() => deleteProduk()}
                className="w-40 bg-blue-300 py-2 rounded-lg cursor-pointer hover:opacity-80"
              >
                <p className="font-semibold text-center">Hapus</p>
              </div>
              {/* tes */}
              <PDFDownloadLink
              document={<PdfDocument dataPdf={NamaBarang} />}
                className="w-40 bg-blue-300 mx-5 py-2 rounded-lg cursor-pointer hover:opacity-80"
              >
                <p className="font-semibold text-center">Downlload</p>
              </PDFDownloadLink>
              {/* tes */}
              <div className="">
                <ActionPrint />
                {/* <p className="" onClick={() => handlePrint()}>
                  tes
                </p> */}
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
              onChange={handleInputChange}
              placeholder="Cari....."
              className="py-2 rounded-md w-1/3 text-sm bg-gray-200 px-3"
            />
          </div>

          {/* tabel */}
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
              {DataProduk?.map((produk, index) => (
                <>
                  <tr
                    onClick={() => selectProduct(produk)}
                    className="cursor-pointer hover:bg-slate-200"
                    key={produk?.id_barang}
                  >
                    <td className="border border-black py-2 text-center font-semibold">
                      {produk?.id_barang}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {produk?.kode_barang}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {produk?.nama_barang}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {moment(produk?.expired_date).format("DD/MM/YYYY")}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {produk?.jumlah_barang}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {produk?.satuan}
                    </td>
                    <td className="border border-black text-center font-semibold">
                      {currencyFormatter.format(produk?.harga_satuan)}
                    </td>
                  </tr>
                </>
              ))}
            </table>
          </div>

          <Modal
            title="Silahkan pilih satuan barang"
            open={IsOpen}
            footer={[]}
            onCancel={handleCancel}
          >
            <div
              onClick={() => {
                setSatuan("botol"), handleCancel();
              }}
              className="border border-black w-1/2 m-auto rounded-lg py-2 mt-5 hover:opacity-80 cursor-pointer"
            >
              <p className="font-semibold text-center">Botol</p>
            </div>
            <div
              onClick={() => {
                setSatuan("kardus"), handleCancel();
              }}
              className="border border-black w-1/2 m-auto rounded-lg py-2 mt-3 hover:opacity-80 cursor-pointer"
            >
              <p className="font-semibold text-center">Kardus</p>
            </div>
            <div
              onClick={() => {
                setSatuan("pcs"), handleCancel();
              }}
              className="border border-black w-1/2 m-auto rounded-lg py-2 mt-3 hover:opacity-80 cursor-pointer"
            >
              <p className="font-semibold text-center">Pcs</p>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default KelolaBarang;
