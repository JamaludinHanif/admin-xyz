import { message } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // react router dom
  const navigate = useNavigate();

  // sessionStorage
  let isLoggedIn = sessionStorage.getItem("@isLoggedIn");
  console.log("ini logied", isLoggedIn);
  let type = sessionStorage.getItem("type");

  // state
  const [UserName, setUserName] = useState();
  const [Password, setPassword] = useState();

  // function login
  const login = (event) => {
    event.preventDefault();

    if (Password == 12345678) {
      if (UserName == "kasir") {
        navigate("/kelola-transaksi");
        sessionStorage.setItem("type", "kasir");
        sessionStorage.setItem("@isLoggedIn", true);
      } else if (UserName == "admin") {
        navigate("/login-activity");
        sessionStorage.setItem("type", "admin");
        sessionStorage.setItem("@isLoggedIn", true);
      } else if (UserName == "gudang") {
        navigate("/kelola-barang");
        sessionStorage.setItem("type", "gudang");
        sessionStorage.setItem("@isLoggedIn", true);
      } else {
        message.info("user tidak di temukan");
      }
    } else {
      message.error("password salah");
    }

  };

  // middleware
  const middleware = () => {
    if (isLoggedIn == true) {
      if (type.type == "gudang") {
        navigate("/kelola-barang");
      } else if (type.type == "kasir") {
        navigate("/kelola-transaksi");
      } else if (type.type == "admin") {
        navigate("/login-activity");
      }
    } else {
      navigate('/')
    }
  };

  useEffect(() => {
    middleware();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="">
        <div className="">
          <img
            src="https://jamaludinhanif.github.io/portofolio-hanif/dist/img/react.png"
            alt=""
            className="h-32 w-32 m-auto"
          />
        </div>
        <p className="text-center font-bold text-4xl px-36">Food XYZ</p>
        {/* form input */}
        <div className="w-10/12 m-auto mt-7">
          <form onSubmit={login}>
            <input
              type="text"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full bg-slate-200 rounded-md placeholder:text-gray-500 placeholder:text-sm py-3 px-3 mb-4"
              required
              placeholder="User Name"
            />{" "}
            <br />
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              className="w-full bg-slate-200 rounded-md py-3 px-3 placeholder:text-gray-500 placeholder:text-sm mb-4"
              required
              placeholder="Password"
            />
            {/* button */}
            <div className="flex">
              <button
                // onClick={(e) => {
                //   e.preventDefault();
                // }}
                className="w-6/12 mr-1 py-2 bg-blue-400 rounded-lg hover:opacity-80"
                type="submit"
              >
                Login
              </button>
              <button className="w-6/12 ml-1 py-2 bg-gray-400 rounded-lg hover:opacity-80">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
