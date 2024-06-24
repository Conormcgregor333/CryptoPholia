import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Pricing from "./pricing";
import Home from "./home";
/* import Coins from "./coins"; */
import CoinInfo from "./coininfo";
import Coins from "./coins";
import NFT from "./nft";
import NFTInfo from "./nftinfo";
import SignUp from "./signup";
import Login from "./login";
import { createContext } from "react";
export let context = createContext();
function App() {
  let [currency, setCurrency] = useState("usd");
  let [lgn, setLgn] = useState(false);
  function currencyType(e) {
    setCurrency(e.target.value);
  }
  let [theme, setTheme] = useState("light" || localStorage.getItem("theme"));
  let [bool, setBool] = useState(true);

  let [ham, setHam] = useState(false);
  function flipLight() {
    localStorage.setItem("theme", "light");
    setTheme("light");
  }
  function flipDark() {
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  }
  let marqueeArray = [
    "Bit",
    "Ethereum ",
    "Stellar",
    "Binance",
    "Doge",
    "Cardano",
    "Lite",
    "XRP",
    " Bit",
    "Ethereum ",
    "Stellar",
    "Binance",
    "Doge",
    "Cardano",
    "Lite",
    "XRP",
    "nBit",
    "Ethereum ",
    "Stellar",
    "Binance",
    "Doge",
    "Cardano",
    "Lite",
    "XRP",
    " Binance",
    "Doge",
    "Cardano",
    "Lite",
    "XRP",
    " Bit",
    "Ethereum ",
    "Stellar",
    "Binance",
    "Doge",
    "Cardano",
    "Lite",
    "XRP",
    " Binance",
    "Doge",
    "Cardano",
    "Lite",
    "XRP",
    " Bit",
    "Ethereum ",
    "Stellar",
    "Binance",
    "Doge",
    "Cardano",
    "Lite",
    "XRP",
  ];
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [trendingData, setTrendingData] = useState(null);
  return (
    <context.Provider
      value={{
        trendingData,
        setTrendingData,
        currency,
        setCurrency,
        currencyType,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        lgn,
        setLgn,
      }}
    >
      <div
        className={
          localStorage.getItem("theme") == "dark"
            ? "backgrnd pt-5 pb-6 body"
            : "bg-white pt-5  pb-6 body"
        }
      >
        <div className="flex justify-between mx-auto sm:flex md:hidden xl:hidden 2xl:hidden  w-11/12 sm:w-11/12 md:w-4/5 xl:w-2/3 2xl:w-2/3">
          <div className="text-2xl font-bold text-green-600 ">
            <Link to={"/"}>Cryptophilio</Link>
          </div>
          <div>
            <div className="flex justify-between">
              {localStorage.getItem("theme") == "light" || theme == "light" ? (
                <div
                  onClick={() => {
                    flipDark();
                  }}
                  className="text-xl font-bold mr-4 -mt-1 text-gray-300 cursor-pointer hover:text-black"
                >
                  ☾
                </div>
              ) : (
                <div
                  onClick={() => {
                    flipLight();
                  }}
                  className="text-xl font-bold mr-4 -mt-1 text-white cursor-pointer hover:text-yellow-400"
                >
                  ☼
                </div>
              )}
              <div
                id="hamburger"
                onClick={() => {
                  setHam(!ham);
                }}
                className={ham ? "hamburger   hamburger-press" : "hamburger   "}
              >
                <div
                  className={
                    localStorage.getItem("theme") == "dark"
                      ? "ham1 bg-white"
                      : "ham1 bg-black"
                  }
                ></div>
                <div
                  className={
                    localStorage.getItem("theme") == "dark"
                      ? "ham2 bg-white"
                      : "ham2 bg-black"
                  }
                ></div>
                <div
                  className={
                    localStorage.getItem("theme") == "dark"
                      ? "ham3 bg-white"
                      : "ham3 bg-black"
                  }
                ></div>
              </div>
            </div>
            {/* hamburger */}
          </div>
        </div>
        <div className="hidden justify-between w-11/12 sm:w-11/12 md:w-4/5 xl:w-2/3 2xl:w-2/3  mx-auto sm:hidden md:flex xl:flex 2xl:flex">
          <div className="flex justify-between mt-2">
            <div
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-md font-bold text-gray-300   hover:text-yellow-400"
                  : "text-md font-bold text-gray-600 0  hover:text-yellow-400"
              }
            >
              <Link to={"/coins"}>Coins</Link>
            </div>
            <div
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-md font-bold text-gray-300 mx-10 hover:text-yellow-400"
                  : "text-md font-bold text-gray-600 mx-10  hover:text-yellow-400"
              }
            >
              <Link to={"/nft"}>NFT</Link>
            </div>
            <div
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-md font-bold text-gray-300  hover:text-yellow-400"
                  : "text-md font-bold text-gray-600  hover:text-yellow-400"
              }
            >
              <Link to={"/pricing"}>Pricing</Link>
            </div>
          </div>
          <div className="text-2xl font-bold text-green-600 ">
            <Link to={"/"}>Cryptophilio</Link>
          </div>
          <div className="flex justify-between">
            {localStorage.getItem("theme") == "light" || theme == "light" ? (
              <div
                onClick={() => {
                  flipDark();
                }}
                className="text-xl font-bold mt-2 text-gray-300 cursor-pointer hover:text-black"
              >
                ☾
              </div>
            ) : (
              <div
                onClick={() => {
                  flipLight();
                }}
                className="text-xl font-bold mt-2 text-white cursor-pointer hover:text-yellow-400"
              >
                ☼
              </div>
            )}
            {lgn ? (
              <div
                className={
                  localStorage.getItem("theme") == "dark"
                    ? "text-md mx-6 font-bold text-white mt-2 cursor-pointer  "
                    : "text-md mx-6 font-bold text-black mt-2 cursor-pointer "
                }
              >
                Hello,{" "}
                <span className="text-blue-500 hover:text-green-500">
                  <Link to={"/login"}>{localStorage.getItem("username")}</Link>
                </span>
              </div>
            ) : (
              <>
                <div className="text-md mx-6 font-bold text-gray-300 mt-2 cursor-pointer  hover:text-green-500">
                  <Link to={"/login"}>Login</Link>
                </div>
                <Link to={"/signup"}>
                  <p className="shadow-md shadow-black text-md font-bold w-28 h-10 rounded-md text-center pt-2 bg-green-500 stext-black cursor-pointer hover:text-yellow-500 hover:border-2  hover:bg-white hover:pt-1.5 hover:border-6 hover:border-yellow-500">
                    SignUp
                  </p>
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="marquee-container w-11/12 sm:w-11/12 md:w-4/5 xl:w-2/3 2xl:w-2/3 mx-auto mt-2">
          <div className="crypto-container ">
            {marqueeArray.map((index) => {
              return (
                <div
                  className={
                    localStorage.getItem("theme") == "dark"
                      ? "crypto text-md text-yellow-600"
                      : "crypto text-md text-green-500"
                  }
                >
                  {index}
                </div>
              );
            })}
          </div>
        </div>
        {ham ? (
          <div
            className={
              localStorage.getItem("theme") == "dark"
                ? " w-11/12 sm:w-11/12 md:w-4/5 xl:w-2/3 2xl:w-2/3 mx-auto h-36 bg-green-100 rounded-md "
                : " w-11/12 sm:w-11/12 md:w-4/5 xl:w-2/3 2xl:w-2/3 mx-auto h-36 bg-gray-200 rounded-md"
            }
          >
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-md font-bold text-black hover:text-yellow-400 text-center"
                  : "text-md font-bold text-gray-600  hover:text-yellow-400 text-center"
              }
            >
              <Link
                onClick={() => {
                  setHam(!ham);
                }}
                to={"/nft"}
              >
                NFT
              </Link>
            </p>

            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-md font-bold text-black   hover:text-yellow-400 mt-1 mb-1  text-center"
                  : "text-md font-bold text-gray-600   hover:text-yellow-400 mt-1 mb- text-center"
              }
            >
              <Link
                onClick={() => {
                  setHam(!ham);
                }}
                to={"/coins"}
              >
                Coins
              </Link>
            </p>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-md font-bold text-black  hover:text-yellow-400 mt-1 mb-1 text-center"
                  : "text-md font-bold text-gray-600  hover:text-yellow-400 mt-1 mb-1 text-center"
              }
            >
              <Link
                onClick={() => {
                  setHam(!ham);
                }}
                to={"/pricing"}
              >
                Pricing
              </Link>
            </p>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-md font-bold text-blue-500  hover:text-yellow-400 mt-1 mb-1 text-center"
                  : "text-md font-bold text-blue-500  hover:text-yellow-400 mt-1 mb-1 text-center"
              }
            >
              <Link
                onClick={() => {
                  setHam(!ham);
                }}
                to={"/login"}
              >
                Login
              </Link>
            </p>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-md font-bold text-blue-700  hover:text-yellow-400 text-center"
                  : "text-md font-bold text-blue-700  hover:text-yellow-400 text-center"
              }
            >
              <Link
                onClick={() => {
                  setHam(!ham);
                }}
                to={"/signup"}
              >
                SignUp
              </Link>
            </p>
          </div>
        ) : null}
        <p
          className={
            localStorage.getItem("theme") == "dark"
              ? "w-11/12 sm:w-11/12 md:w-4/5 xl:w-2/3 2xl:w-2/3  bg-green-500 mx-auto line-break mt-1"
              : "w-11/12 sm:w-11/12 md:w-4/5 xl:w-2/3 2xl:w-2/3  bg-black mx-auto line-break mt-1"
          }
        ></p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="coininfo/:id" element={<CoinInfo />} />
          <Route path="/nftinfo/:id" element={<NFTInfo />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </context.Provider>
  );
}

export default App;
