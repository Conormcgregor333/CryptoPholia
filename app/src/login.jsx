import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { context } from "./App";
export default function Login() {
  let { lgn, setLgn, trueLogin, setTrueLogin } = useContext(context);
  /* let [trueLogin, setTrueLogin] = useState(false); */
  let [Loginname, setLoginName] = useState("");
  let [LoginEmail, setLoginEmail] = useState("");
  let [LoginPassowrd, setLoginPassword] = useState("");
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
  function submitLogin() {
    setLgn(true);
    if (
      Loginname == localStorage.getItem("username") &&
      LoginPassowrd == localStorage.getItem("password") &&
      LoginEmail == localStorage.getItem("email")
    ) {
      setTrueLogin(true);
    } else {
      setTrueLogin(false);
    }
  }
  return (
    <div>
      {!trueLogin ? (
        <p
          className={
            localStorage.getItem("theme") == "dark"
              ? "text-white text-xl font-bold text-center mx-2 text-wrap mt-16"
              : "text-xl font-bold text-center mx-2 text-wrap mt-16"
          }
        >
          Login to get all the current market trends in{" "}
          <span className="text-yellow-500">CRYPTO</span> and NFT's .
        </p>
      ) : null}
      {/*  <div>
        {lgn && trueLogin ? (
          <div>
            <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-white text-xl font-bold mt-10 text-center"
                : "text-xl font-bold mt-10 text-center"
            }
          >
            Login successfull
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
        ) : lgn ? (
          <p className="text-wrap text-md font-bold mt-10 text-red-500 text-center">
            Login credential incorrect or account does not exists.{" "}
            <Link to={"/signup"}>
              <span className="text-blue-500">Signup?</span>
            </Link>
          </p>
        ) : null}
      </div> */}
      {lgn && trueLogin ? (
        <div>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-white text-xl font-bold mt-10 text-center"
                : "text-xl font-bold mt-10 text-center"
            }
          >
            Login successfull
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
      ) : lgn ? (
        <p className="text-wrap text-md font-bold mt-10 text-red-500 text-center">
          Login credential incorrect or account does not exists.{" "}
          <Link to={"/signup"}>
            <span className="text-blue-500">Signup?</span>
          </Link>
        </p>
      ) : (
        <div>
          <div className="block sm:block md:flex xl:flex 2xl:flex justify-around w-11/12 sm:w-9/12 md:w-3/12 xl:w-3/12 2xl:w-3/12 mx-auto border-2 border-green-500 mt-5 rounded-md">
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
        </div>
      )}
      <p
        className={
          localStorage.getItem("theme") == "dark"
            ? "text-white text-xl font-bold text-center mx-2 text-wrap mt-5"
            : "text-xl font-bold text-center mx-2 text-wrap mt-5"
        }
      >
        <span className="text-yellow-500">CRYPTO</span> is not the next, it is
        now
      </p>
      <p
        className={
          localStorage.getItem("theme") == "dark"
            ? "text-white font-bold text-center mt-6 mb-6"
            : "text-black font-bold text-center mt-6 mb-6"
        }
      >
        Connect with me
      </p>
      <div className="mt-10 mx-auto flex w-56 justify-between">
        <a
          className="block"
          target="_blank"
          href="https://www.instagram.com/siddharthian333/"
        >
          <svg
            fill={
              localStorage.getItem("theme") == "dark" ? "#ffffff" : "#000000"
            }
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xml:space="preserve"
            width="50px"
            height="50px"
          >
            <path
              d="M349.33,69.333H162.67C109.334,69.333,69.334,109.333,69.334,162.67v186.67c0,53.336,40,93.336,93.336,93.336h186.66
        c53.336,0,93.336-40,93.336-93.336V162.67C442.67,109.333,402.67,69.333,349.33,69.333z M410.666,349.34
        c0,33.332-27,60.332-60.332,60.332H162.67c-33.332,0-60.332-27-60.332-60.332V162.67c0-33.332,27-60.332,60.332-60.332h186.67
        c33.332,0,60.332,27,60.332,60.332V349.34z"
            />
            <path
              d="M256,162.67c-51.336,0-93.336,42-93.336,93.336S204.664,349.34,256,349.34c51.336,0,93.336-42,93.336-93.336
        S307.336,162.67,256,162.67z M256,316.004c-33.336,0-60.336-27-60.336-60.336s27-60.336,60.336-60.336s60.336,27,60.336,60.336
        S289.336,316.004,256,316.004z"
            />
            <circle cx="349.33" cy="162.67" r="21.336" />
          </svg>
        </a>
        <a
          className="block"
          target="_blank"
          href="https://www.linkedin.com/in/siddharth-pareek-75514b190/"
        >
          <svg
            fill={
              localStorage.getItem("theme") == "dark" ? "#ffffff" : "#000000"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="50px"
            height="50px"
          >
            <path d="M100.28 448H7.4V148.9h92.78zm-46.44-340C24.41 108 0 83.54 0 51.75 0 20.05 24.42 0 54.41 0s54.44 20.05 54.44 51.75c0 31.79-24.41 56.25-54.45 56.25zM447.9 448h-92.81V302.4c0-34.7-12.33-58.4-43.21-58.4-23.54 0-37.54 15.83-43.65 31.12-2.25 5.48-2.81 13.14-2.81 20.83V448H172.66s1.25-265.3 0-292.1h92.81v41.4c-.19.3-.47.6-.66.9h.66v-.9c12.34-18.96 34.28-45.99 83.42-45.99 60.9 0 106.46 39.79 106.46 125.3V448z" />
          </svg>
        </a>
        <a
          className="block"
          href="https://github.com/Conormcgregor333"
          target="_blank"
        >
          <svg
            fill={
              localStorage.getItem("theme") == "dark" ? "#ffffff" : "#000000"
            }
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 438.549 438.549"
            xml:space="preserve"
            width="50px"
            height="50px"
          >
            <path
              d="M409.132,114.573c-19.751-34.407-46.204-61.567-80.362-81.454C294.606,12.236,259.594,0,223.822,0
        c-35.78,0-70.792,12.236-104.948,33.119c-34.164,19.891-60.617,47.047-80.368,81.454C15.478,149.168,4.392,185.656,4.392,224.32
        c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.571,108.063,79.229c5.14,0.954,8.945,0.283,11.419-1.996
        c2.475-2.283,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.096-9.709-0.144-18.419-0.144-26.126l-6.567,1.136
        c-4.187,0.767-9.469,1.092-15.846,0.999c-6.374-0.097-12.991-0.757-19.842-1.999c-6.852-1.242-13.707-3.479-20.557-6.711
        c-6.851-3.233-12.705-7.902-17.557-13.989c-4.852-6.093-8.708-13.373-11.562-21.842c-2.854-8.468-7.521-15.417-13.988-20.84
        c-6.467-5.428-10.754-11.229-12.847-17.418c-2.093-6.184-0.571-11.322,4.568-15.417c3.805-0.381,8.709,0.571,14.705,2.853
        c5.996,2.286,10.988,5.333,14.98,9.136c4.09,3.807,7.327,8.754,9.705,14.847c3.805,13.325,10.752,23.791,20.841,31.405
        c10.088,7.614,21.604,11.42,34.545,11.419c12.939-0.001,23.317-0.571,31.126-1.708c7.804-1.141,14.229-2.573,19.271-4.288
        c1.521-11.419,6.377-20.748,14.562-27.982c-11.803-1.141-22.839-2.854-33.119-5.136c-10.276-2.286-20.602-5.996-30.978-11.136
        c-10.374-5.14-19.605-12.037-27.697-20.7c-8.088-8.658-14.656-19.417-19.701-32.265c-5.046-12.847-7.568-27.314-7.568-43.398
        c0-23.035,7.52-42.637,22.557-58.816c-7.044-17.318-6.379-36.732,1.996-58.24c5.52-1.715,13.706-0.428,24.554,3.853
        c10.849,4.283,18.842,7.952,23.985,10.994c5.14,3.042,9.089,5.618,11.848,7.708c18.465-5.14,37.924-7.711,58.385-7.711
        s39.921,2.571,58.383,7.711l10.849-7.134c7.61-4.57,16.516-8.758,26.697-12.562c10.184-3.805,17.749-4.949,22.699-3.424
        c8.562,21.509,9.325,40.922,2.279,58.24c15.036,16.18,22.559,35.781,22.559,58.816c0,16.088-2.521,30.544-7.566,43.398
        c-5.044,12.847-11.61,23.601-19.703,32.265c-8.09,8.661-17.319,15.558-27.693,20.7c-10.375,5.14-20.704,8.85-30.979,11.136
        c-10.276,2.282-21.318,3.995-33.126,5.136c9.897,8.562,14.842,22.225,14.842,40.971v60.526c0,3.424,1.19,6.279,3.571,8.562
        c2.379,2.279,6.232,2.949,11.56,1.995c44.163-14.654,80.185-41.062,108.068-79.229c27.883-38.161,41.825-81.126,41.825-128.906
        C433.137,185.656,422.06,149.168,409.132,114.573z"
            />
          </svg>
        </a>
      </div>
      <a
        className="block hover:text-blue-400 mt-10 mb-10 text-center font-bold bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
        href="https://www.linkedin.com/in/siddharth-pareek-75514b190/"
        target="_blank"
      >
        Siddharth Pareek
      </a>
      <p
        className={
          localStorage.getItem("theme") == "dark"
            ? "text-white text-sm font-bold text-center  mb-96"
            : "text-sm font-bold text-center mb-96"
        }
      >
        © 2024 Cryptophilio. All rights reserved
      </p>
    </div>
  );
}
