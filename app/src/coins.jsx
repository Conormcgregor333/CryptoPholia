import { useState, useEffect } from "react";
import { useContext } from "react";
import { context } from "./App";
import { Link } from "react-router-dom";
export default function Coins() {
  let [search, setSearch] = useState("");
  let [data, setData] = useState([]);
  let [searchedData, setSearchedData] = useState([]);
  let [currency, setCurrency] = useState("usd");
  let [load, setLoad] = useState(20);
  let [loading, setLoading] = useState(true);
  let [loading2, setLoading2] = useState(true);
  function go2(e) {
    setCurrency(e.target.value);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-mALnWvnrSjvUfZQ139Cnaayx",
      },
    };
    /*  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${e.target.value}&ids=${search}` */
    let getData = async () => {
      let d = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${e.target.value}`,
        options
      );
      let k = await d.json();
      if (k) {
        k = k.filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase());
        });
        setSearchedData(k);
        setLoading(false);
        console.log(k);
      }
    };
    getData();
  }
  function go() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-mALnWvnrSjvUfZQ139Cnaayx",
      },
    };
    let getData = async () => {
      let d = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`,
        options
      );
      let k = await d.json();
      if (k) {
        k = k.filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase());
        });
        setSearchedData(k);
        setLoading(false);
        console.log(k);
      }
    };
    getData();
  }

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
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`,
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
  }, [currency]);
  return (
    <div>
      <p
        className={
          localStorage.getItem("theme") == "dark"
            ? "text-xl font-bold text-center text-white mt-20 mx-2 text-wrap"
            : "text-xl font-bold text-center mt-20 mx-2 text-wrap"
        }
      >
        Get all the <span className="text-yellow-500">CRYPTO</span> data at one
        click
      </p>
      <div className="w-44 mx-auto mt-20 mb-10">
        <input
          list="coinList"
          placeholder="search for coins..."
          className={
            localStorage.getItem("theme") == "dark"
              ? "w-56 h-10 rounded-md border-2 border-green-500 mr-2 p-1"
              : "w-56 h-10 rounded-md border-2 border-gray-500 mr-2 p-1"
          }
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <datalist id="coinList">
          {data
            ? data.map((item, index) => (
                <option key={index} value={item.name} />
              ))
            : null}
        </datalist>
        <div className=" mx-auto mt-2">
          <button
            className="w-20 h-10 bg-green-500 text-sm font-bold rounded-md mr-1"
            onClick={() => {
              go();
            }}
          >
            search
          </button>
          <select
            className="bg-yellow-500 text-black text-sm font-bold w-14 h-10 rounded-md"
            name=""
            id=""
            value={currency}
            onChange={(e) => {
              go2(e);
            }}
          >
            <option value="usd">usd</option>
            <option value="inr">inr</option>
          </select>
        </div>
      </div>
      <div
        className={
          localStorage.getItem("theme") == "dark"
            ? "sm:w-11/12 md:w-11/12 xl:w-8/12 2xl:w-1/2 w-11/12 mx-auto border-2 border-blue-400 rounded-md bg-green-900"
            : "sm:w-11/12 md:w-11/12 xl:w-8/12 2xl:w-1/2 w-11/12 mx-auto border-2 border-blue-400 rounded-md bg-green-300"
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
        {search == "" && data ? (
          loading2 ? (
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
            data.slice(0, load).map((item, index) => {
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
                      {currency == "usd" ? "$" : " ₹"}
                      {item.current_price.toLocaleString()}
                    </p>
                    <p
                      className={
                        item.price_change_percentage_24h.toFixed(2) > 0
                          ? "text-green-200 text-center  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
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
                      {currency == "usd" ? "$" : " ₹"}
                      {item.market_cap.toLocaleString()}
                    </p>
                  </div>
                </Link>
              );
            })
          )
        ) : loading ? (
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
          searchedData.map((item) => {
            return (
              <div className="table-content hover:scale-110 hover:transition-all hover:bg-green-900">
                <p
                  className={
                    localStorage.getItem("theme") == "dark"
                      ? "text-white  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                      : "text-black  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                  }
                >
                  {item.market_cap_rank}
                </p>
                <div className="flex ">
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
                  {currency == "usd" ? "$" : " ₹"}
                  {item.current_price.toLocaleString()}
                </p>
                <p
                  className={
                    item.price_change_percentage_24h.toFixed(2) > 0
                      ? "text-green-400  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
                      : "text-red-500  text-xs sm:text-sm xl:text-base md:text-base 2xl:text-base"
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
                  {currency == "usd" ? "$" : " ₹"}
                  {item.market_cap.toLocaleString()}
                </p>
              </div>
            );
          })
        )}
      </div>
      {load > 90 ? (
        <p
          className={
            localStorage.getItem("theme") == "dark"
              ? "text-white text-center mt-10 text-md font-bold"
              : "text-center mt-10 text-md font-bold"
          }
        >
          All coins loaded
        </p>
      ) : (
        <p
          onClick={() => {
            setLoad(load + 20);
          }}
          className={
            localStorage.getItem("dark") == "dark"
              ? "w-28 h-8 bg-green-500 text-black text-sm font-bold mx-auto mt-10 text-center pt-1 rounded-sm cursor-pointer hover:scale-105 hover:transition-all"
              : "w-28 h-8 bg-black text-white text-sm font-bold mx-auto mt-10 text-center pt-1 rounded-sm cursor-pointer hover:scale-105 hover:transition-all"
          }
        >
          Load More
        </p>
      )}
    </div>
  );
}
