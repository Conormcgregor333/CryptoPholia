import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { context } from "./App";
export default function Login() {
  function delAccount() {
    let userConfirm = confirm(
      `Are you sure ${localStorage.getItem(
        "username"
      )} you want to delete this account?`
    );
    if (userConfirm) {
      localStorage.setItem("username", "");
      localStorage.setItem("password", "");
      localStorage.setItem("email", "");
      alert("Deleted your account");
      setLgn(false);
    }
  }
  let { lgn, setLgn } = useContext(context);
  /*   let [lgn, setLgn] = useState(false);
   */ let [falseLogin, setFalseLogin] = useState(false);
  let [Loginname, setLoginName] = useState("");
  let [LoginEmail, setLoginEmail] = useState("");
  let [LoginPassowrd, setLoginPassword] = useState("");
  function submitLogin() {
    if (
      Loginname != "" &&
      Loginname == localStorage.getItem("username") &&
      LoginPassowrd != "" &&
      LoginPassowrd == localStorage.getItem("password") &&
      LoginEmail != "" &&
      LoginEmail == localStorage.getItem("email")
    ) {
      setLgn(true);
    } else {
      setFalseLogin(true);
    }
  }
  return (
    <div>
      {falseLogin ? (
        <p className="text-wrap text-md font-bold mt-10 text-red-500 text-center">
          Login credential incorrect or account does not exists.{" "}
          <Link to={"/signup"}>
            <span className="text-blue-500">Signup?</span>
          </Link>
        </p>
      ) : null}
      {lgn ? (
        <div>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-white text-xl font-bold mt-10 text-center"
                : "text-xl font-bold mt-10 text-center"
            }
          >
            Welcome back {localStorage.getItem("username")} :)
          </p>
          <p
            className="text-red-500 text-center text-sm font-bold mt-5 cursor-pointer"
            onClick={() => {
              setLgn(false);
            }}
          >
            Logout?
          </p>
          <p
            className="mt-5 text-red-500 text-center text-sm font-bold cursor-pointer"
            onClick={() => {
              delAccount();
            }}
          >
            Delete account?
          </p>
        </div>
      ) : (
        <div className="block sm:block md:flex xl:flex 2xl:flex justify-around w-11/12 sm:w-9/12 md:w-3/12 xl:w-3/12 2xl:w-3/12 mx-auto border-2 border-green-500 mt-20 rounded-md">
          <form className="basis-2/4 ml-2">
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-white font-bold text-sm mb-2  mt-2 text-center sm:text-start md:text-start xl:text-start 2xl:text-start"
                  : "font-bold text-sm mb-2  mt-2 text-center sm:text-start md:text-start xl:text-start 2xl:text-star"
              }
            >
              Username :
            </p>
            <input
              className="border-2 border-green-500 rounded-md mb-2 p-1 mx-auto block sm:inline-block md:inline-block xl:inline-block 2xl:inline-block"
              required
              placeholder="name"
              type="text"
              value={Loginname}
              onChange={(e) => {
                setLoginName(e.target.value);
              }}
            />
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-white font-bold text-sm mb-2 text-center sm:text-start md:text-start xl:text-start 2xl:text-star"
                  : "font-bold text-sm mb-2 text-center sm:text-start md:text-start xl:text-start 2xl:text-star"
              }
            >
              Email :
            </p>
            <input
              className="border-2 border-green-500 rounded-md mt-2 p-1 mx-auto block sm:inline-block md:inline-block xl:inline-block 2xl:inline-block"
              type="email"
              required
              placeholder="email"
              value={LoginEmail}
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            />
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-white font-bold text-sm mb-2 mt-2 text-center sm:text-start md:text-start xl:text-start 2xl:text-star"
                  : "font-bold text-sm mb-2 mt-2 text-center sm:text-start md:text-start xl:text-start 2xl:text-star"
              }
            >
              Password :
            </p>
            <input
              className="border-2 border-green-500 rounded-md mb-2 p-1 mx-auto block sm:inline-block md:inline-block xl:inline-block 2xl:inline-block"
              type="password"
              value={LoginPassowrd}
              placeholder="password"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            />
            <button
              type="submit"
              className="w-20 h-8 font-bold text-sm bg-blue-500 hover:bg-green-500 text-white rounded-md mt-6 block mx-auto"
              onClick={() => {
                submitLogin();
              }}
            >
              Login
            </button>
          </form>
          <div className="basis-2/4">
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-xl font-bold text-center mt-5 mb-5 text-white w-2/3 sm:w-auto md:w-auto xl:w-auto 2xl:w-auto mx-auto"
                  : "text-xl font-bold text-center mt-5 mb-5 w-2/3 sm:w-auto md:w-auto xl:w-auto 2xl:w-auto mx-auto"
              }
            >
              Supercharge your <span className="text-yellow-500">crypto</span>{" "}
              hunt with <span className="text-green-500">Cryptophilio</span>
            </p>
            <img
              className="w-44 h-44 block mt-5 mx-auto"
              src="https://cdn0.iconfinder.com/data/icons/crypotonix/512/worldwide.png"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}
