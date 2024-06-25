import { useContext, useEffect, useState } from "react";
import { context } from "./App";
import { Link } from "react-router-dom";
import "./App.css";

export default function Home() {
  let { trendingData, setTrendingData, trueLogin, setTrueLogin } =
    useContext(context);
  let [loading, setLoading] = useState(true);
  let [load, setLoad] = useState(6);
  useEffect(() => {
    document.getElementById("p1").classList.add("slide1");
    document.getElementById("p2").classList.add("slide2");
  }, []);
  useEffect(() => {
    const options = { method: "GET", headers: { accept: "application/json" } };
    let getData = async () => {
      let d = await fetch(
        "https://api.coingecko.com/api/v3/search/trending",
        options
      );
      let k = await d.json();
      if (k) {
        setTrendingData(k);
        setLoading(false);
        console.log("in it");
      }
    };
    getData();
  }, []);
  /* ----------------------------------------------------------------------- */
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-mALnWvnrSjvUfZQ139Cnaayx",
      },
    };
    let getData = async () => {
      let d = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`,
        options
      );
      let k = await d.json();
      if (k) {
        setData(k);
        setLoading2(false);
        console.log(k);
      }
    };
    getData();
  }, []);
  /* ------------------------------------------------------------------------ */
  let [data, setData] = useState([]);
  let [loading2, setLoading2] = useState(true);

  let [type, setType] = useState("coins");
  function typeSelector(e) {
    setType(e.target.value);
  }
  let bitArray = [
    "✪Google✪",
    "✪Binance✪",
    "✪MasterCard✪",
    "✪DogeCoin✪",
    "✪Visa✪",
    "✪BitCoin✪",
    "✪BlockChain✪",
    "✪NFT✪",
    "✪Google✪",
    "✪Binance✪",
    "✪MasterCard✪",
    "✪DogeCoin✪",
    "✪Visa✪",
    "✪BitCoin✪",
    "✪BlockChain✪",
    "✪NFT✪",
    "✪Google✪",
    "✪Binance✪",
    "✪MasterCard✪",
    "✪DogeCoin✪",
    "✪Visa✪",
    "✪BitCoin✪",
    "✪BlockChain✪",
    "✪NFT✪",
    "✪Google✪",
    "✪Binance✪",
    "✪MasterCard✪",
    "✪DogeCoin✪",
    "✪Visa✪",
    "✪BitCoin✪",
    "✪BlockChain✪",
    "✪NFT✪",
  ];
  return (
    <div>
      <div
        id="p1"
        className="block sm:flex md:flex xl:flex 2xl:flex justify-between w-11/12 sm:w-11/12 md:w-4/5 xl:w-2/3 2xl:w-2/3 mx-auto mt-6"
      >
        <div>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-2xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-white font-bold text-justify leading-snug"
                : "text-2xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-black font-bold text-justify leading-snug"
            }
          >
            <span className="text-yellow-500">Crypto</span> at your finger
            tips.One-stop for all the data you need.
          </p>
          <p className="text-sm font-bold text-gray-600 mt-6">
            Get all the{" "}
            <a className="text-blue-400" href="#">
              latest
            </a>{" "}
            and greatest prices and data on a{" "}
            <a className="text-blue-400" href="#">
              click
            </a>
          </p>
        </div>
        <img
          className="h-56 w-56 block mx-auto sm:inline md:inline xl:inline 2xl:inline"
          src="https://static.vecteezy.com/system/resources/previews/011/064/692/original/cryptocurrency-3d-illustration-free-png.png"
          alt=""
        />
      </div>
      <div
        id="p2"
        className="block sm:flex md:flex xl:flex 2xl:flex justify-between w-11/12 sm:w-11/12 md:w-4/5 xl:w-2/3 2xl:w-2/3 mx-auto mt-6"
      >
        <img
          className="h-56 w-56 block mx-auto sm:inline md:inline xl:inline 2xl:inline"
          src="https://static.vecteezy.com/system/resources/previews/009/338/810/original/3d-illustration-credit-card-png.png"
          alt=""
        />
        <div>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-2xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-white font-bold  leading-snug text-justify sm:text-start md:text-start xl:text-start 2xl:text-start"
                : "text-2xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-black font-bold  leading-snug text-justify sm:text-start md:text-start xl:text-start 2xl:text-start"
            }
          >
            <span className="text-yellow-500">Trade</span> and{" "}
            <span className="text-green-500">Earn</span> with a community of
            over millions .
          </p>
          <p className="text-sm font-bold text-gray-600 mt-6">
            Investing in crypto has changed lives . Be the next big thing.
          </p>
          <Link to={"/coins"}>
            <p className="w-28 h-10 mx-auto sm:mx-0 md:mx-0 xl:mx-0 2xl:mx-0 text-center pt-2 bg-yellow-500 text-black text-md font-bold rounded-md mt-6 hover:text-white hover:bg-green-500 cursor-pointer animate-bounce">
              Start
            </p>
          </Link>
        </div>
      </div>
      <div className="marquee-container w-11/12 sm:w-11/12 md:w-4/5 xl:w-2/3 2xl:w-2/3 mx-auto mt-2 bg-green-400 h-20 rounded-md">
        <div className="crypto-container2">
          {bitArray.map((index) => {
            return (
              <div
                className={
                  localStorage.getItem("theme") == "dark"
                    ? "crypto text-2xl font-bold black mt-5 mx-2 sm:mx-0 md:mx-0 xl:mx-0 2xl:mx-0"
                    : "crypto text-2xl font-bold black  mt-5 mx-2 sm:mx-0 md:mx-0 xl:mx-0 2xl:mx-0"
                }
              >
                {index}
              </div>
            );
          })}
        </div>
      </div>
      <p
        className={
          localStorage.getItem("theme") == "dark"
            ? "text-2xl font-bold text-center text-white mt-5"
            : "text-2xl font-bold text-center text-black mt-5"
        }
      >
        Trending <span className="text-yellow-500">Now</span>
        <select
          className="text-black rounded-md ml-6 text-sm bg-yellow-500"
          name="typeSelect"
          id="typeSelect"
          value={type}
          onChange={(e) => {
            typeSelector(e);
          }}
        >
          <option value="coins">coins</option>
          <option value="nfts">nfts</option>
        </select>
      </p>
      <div className="flex justify-around w-11/12 sm:w-11/12 md:w-4/5 xl:w-2/3 2xl:w-2/3 mx-auto mt-6 flex-wrap ">
        {loading ? (
          [...Array(10)].map((index, num) => {
            return (
              <div class="border border-gray-800 shadow rounded-md p-4 max-w-sm w-full mt-4">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-green-600 h-10 w-10"></div>
                  <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      </div>
                      <div class="h-2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : type == "coins" && trendingData ? (
          <>
            {trendingData.coins.map((index, num) => {
              if (num < load) {
                return (
                  <div
                    className={
                      localStorage.getItem("theme") == "dark"
                        ? "h-72 w-72 border-1 border-gray-300 shadow-md hover:shadow-green-300  shadow-green-700 rounded-md mt-4"
                        : "h-72 w-72 border-1 border-gray-300 shadow-md hover:shadow-gray-700  shadow-gray-400 rounded-md mt-4"
                    }
                  >
                    <img
                      className="h-2/3 w-11/12 rounded-t-md block mx-auto mt-1"
                      src={index.item.large}
                      alt=""
                    />
                    <p
                      className={
                        localStorage.getItem("theme") == "dark"
                          ? "text-white text-sm font-bold text-center mt-2"
                          : "text-sm font-bold text-center mt-2"
                      }
                    >
                      {index.item.name}
                    </p>
                    <p
                      className={
                        localStorage.getItem("theme") == "dark"
                          ? "text-white text-sm font-bold text-center mt-2"
                          : "text-sm font-bold text-center mt-2"
                      }
                    >
                      {" "}
                      Price
                      <span className="text-yellow-500"> ₿</span>{" "}
                      {index.item.price_btc.toFixed(8)}
                    </p>
                    <div className="flex w-11/12 mx-auto mt-1 justify-between">
                      <p
                        className={
                          localStorage.getItem("theme") == "dark"
                            ? "text-white  hover:text-yellow-500 cursor-pointer"
                            : "text-black  hover:text-yellow-500 cursor-pointer"
                        }
                      >
                        <Link to={`/coininfo/${index.item.id}`}>Read More</Link>
                      </p>
                      <p className="text-green-500 font-bold text-sm mt-2">
                        ▲{" "}
                        <span
                          className={
                            localStorage.getItem("theme") == "dark"
                              ? "text-white"
                              : "text-black"
                          }
                        >
                          {" " + index.item.market_cap_rank}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              }
            })}
            {load > 14 ? (
              <p
                className={
                  localStorage.getItem("theme") == "dark"
                    ? "text-white text-center font-bold mt-6 mb-6 text-md"
                    : "text-dark text-center font-bold mt-6 mb-6 text-md"
                }
              >
                Go to{" "}
                <span className="text-purple-500 hover:text-purple-200">
                  {" "}
                  <Link
                    onClick={() => {
                      setHam(!ham);
                    }}
                    to={"/coins"}
                  >
                    Coins
                  </Link>
                </span>{" "}
                for more coins.
              </p>
            ) : (
              <button
                className="w-28 h-8 bg-black rounded-md mt-10  block mx-auto text-white"
                onClick={() => {
                  setLoad(load + 5);
                }}
              >
                load more
              </button>
            )}
          </>
        ) : trendingData ? (
          trendingData.nfts.map((index) => {
            return (
              <div
                className={
                  localStorage.getItem("theme") == "dark"
                    ? "h-48 w-48 sm:h-60 sm:w-60 md:h-60 md:w-60 xl:h-60 xl:w-60 2xl:h-60 2xl:w-60 border-1 border-gray-300 shadow-md hover:shadow-green-300 shadow-green-700 rounded-md mt-4"
                    : "h-48 w-48 sm:h-60 sm:w-60 md:h-60 md:w-60 xl:h-60 xl:w-60 2xl:h-60 2xl:w-60 border-1 border-gray-300 shadow-md hover:shadow-gray-700 shadow-gray-400 rounded-md mt-4"
                }
              >
                <img
                  className="h-1/3 w-1/3 rounded-full block mx-auto mt-2"
                  src={index.thumb}
                  alt=""
                />
                <p
                  className={
                    localStorage.getItem("theme") == "dark"
                      ? "text-white text-sm font-bold text-center mt-2"
                      : "text-sm font-bold text-center mt-2"
                  }
                >
                  {index.name}
                </p>
                <p
                  className={
                    localStorage.getItem("theme") == "dark"
                      ? "text-white text-sm font-bold text-center mt-2"
                      : "text-sm font-bold text-center mt-2"
                  }
                >
                  Price{" "}
                  <span className="text-green-500 font-bold text-md mt-2">
                    {index.data.floor_price}
                  </span>
                </p>
                <p
                  className={
                    localStorage.getItem("theme") == "dark"
                      ? "text-white  hover:text-yellow-500 cursor-pointer text-center mt-2"
                      : "text-black  hover:text-yellow-500 cursor-pointer text-center mt-2"
                  }
                >
                  Read More
                </p>
              </div>
            );
          })
        ) : null}
      </div>
      {/* top Coin */}
      <p
        className={
          localStorage.getItem("theme") == "dark"
            ? "text-2xl font-bold text-center text-white mt-5"
            : "text-2xl font-bold text-center text-black mt-5"
        }
      >
        Trending in <span className="text-yellow-500">Coins</span>
      </p>
      <div
        className={
          localStorage.getItem("theme") == "dark"
            ? "sm:w-11/12 md:w-11/12 xl:w-8/12 2xl:w-1/2 w-11/12 mx-auto border-2 border-blue-400 rounded-md bg-green-900 mt-10"
            : "sm:w-11/12 md:w-11/12 xl:w-8/12 2xl:w-1/2 w-11/12 mx-auto border-2 border-blue-400 rounded-md bg-green-300 mt-10"
        }
      >
        <div className="table-content">
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-white"
                : "text-black"
            }
          >
            #
          </p>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-white"
                : "text-black"
            }
          >
            Coins
          </p>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-white"
                : "text-black"
            }
          >
            Price
          </p>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-white text-center"
                : "text-black text-center"
            }
          >
            24H Change
          </p>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-white market-cap"
                : "text-black market-cap"
            }
          >
            Market Cap
          </p>
        </div>
        <div>
          {loading2 ? (
            <div>
              {" "}
              <p
                className={
                  localStorage.getItem("theme") == "dark"
                    ? "text-md font-bold text-white mt-28 text-center"
                    : "text-md font-bold mt-28 text-center"
                }
              >
                Loading...
              </p>
              <img
                className="w-56 h-56 block mx-auto mt-2 mb-80"
                src="https://th.bing.com/th/id/R.8fa41da1f4602b875dfe2ba5a3aff509?rik=CFhqLN6OVxIqkw&riu=http%3a%2f%2fclipart-library.com%2fimages%2f8cEbXkpLi.gif&ehk=dsjAdw1MsUpwICSCUvUW94MFeiU8yCijH1v2U6Dudig%3d&risl=&pid=ImgRaw&r=0"
              />
            </div>
          ) : (
            data.slice(0, 20).map((item, index) => {
              return (
                <Link to={`/coininfo/${item.id}`}>
                  <div className="table-content hover:scale-110 hover:transition-all hover:bg-green-900">
                    <p
                      className={
                        localStorage.getItem("theme") == "dark"
                          ? "text-white text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                          : "text-black  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                      }
                    >
                      {item.market_cap_rank}
                    </p>
                    <div className="flex">
                      <img
                        className="w-6 h-6 rounded-full"
                        src={item.image}
                        alt=""
                      />
                      <p
                        className={
                          localStorage.getItem("theme") == "dark"
                            ? "text-white  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                            : "text-black  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                        }
                      >
                        {item.name + "-" + item.symbol}
                      </p>
                    </div>
                    <p
                      className={
                        localStorage.getItem("theme") == "dark"
                          ? "text-white  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                          : "text-black  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                      }
                    >
                      {"$" + item.current_price.toLocaleString()}
                    </p>
                    <p
                      className={
                        item.price_change_percentage_24h.toFixed(2) > 0
                          ? "text-white text-center  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                          : "text-red-500 text-center  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                      }
                    >
                      {item.price_change_percentage_24h.toFixed(2)}
                    </p>
                    <p
                      className={
                        localStorage.getItem("theme") == "dark"
                          ? "text-white market-cap  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                          : "text-black market-cap  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                      }
                    >
                      {"$" + item.market_cap.toLocaleString()}
                    </p>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
      <p
        className={
          localStorage.getItem("theme") == "dark"
            ? "text-white text-sm font-bold text-center mx-2 text-wrap mt-5"
            : "text-sm font-bold text-center mx-2 text-wrap mt-5"
        }
      >
        Go to{" "}
        <Link to={"/coins"}>
          <span className="text-green-500">Coins</span>
        </Link>{" "}
        for more coins
      </p>
      {/* Connect with me */}
      {!trueLogin ? (
        <p
          className={
            localStorage.getItem("theme") == "dark"
              ? "text-white text-xl font-bold text-center mx-2 text-wrap mt-5"
              : "text-xl font-bold text-center mx-2 text-wrap mt-5"
          }
        >
          <span className="text-blue-500 hover:text-green-500">
            <Link to={"/signup"}>SignUp</Link>
          </span>{" "}
          Stay at the top of <span className="text-yellow-500">CRYPTO</span> and
          never miss an update
        </p>
      ) : null}
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
            ? "text-white text-sm font-bold text-center  "
            : "text-sm font-bold text-center "
        }
      >
        © 2024 Cryptophilio. All rights reserved
      </p>
    </div>
  );
}
