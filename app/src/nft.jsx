import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function NFT() {
  let [nftData, setNftData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [load, setLoad] = useState(50);

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
        `https://api.coingecko.com/api/v3/nfts/list?per_page=${load}`,
        options
      );
      let k = await d.json();
      if (k) {
        setNftData(k);
        setLoading(false);
      }
    };
    getData();
  }, [load]);
  return (
    <div>
      <p
        className={
          localStorage.getItem("theme") == "dark"
            ? " text-white text-2xl font-bold mt-10 mb-10 text-center"
            : "text-2xl font-bold mt-10 mb-10 text-center"
        }
      >
        All the <span className="text-yellow-500">NFT'S</span> just a click away
      </p>
      {loading ? (
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
                  ? "text-white text-center  font-bold"
                  : "text-black text-center font-bold"
              }
            >
              #
            </p>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-white pl-12  font-bold"
                  : "text-black pl-12 font-bold"
              }
            >
              Name
            </p>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-white -translate-x-20 font-bold"
                  : "text-black -translate-x-20  font-bold"
              }
            >
              Symbol
            </p>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-white text-center font-bold hidden sm:hidden md:hidden xl:block 2xl:block"
                  : "text-black text-center font-bold hidden sm:hidden md:hidden xl:block 2xl:block"
              }
            >
              Contract Address
            </p>
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-white text-center font-bold"
                  : "text-black text-center font-bold"
              }
            >
              Asset Platform
            </p>
          </div>
          {nftData.map((item, index) => {
            return (
              <Link to={`/nftinfo/${item.id}`}>
                <div className="table-content hover:scale-110 hover:transition-all hover:bg-green-900">
                  <p
                    className={
                      localStorage.getItem("theme") == "dark"
                        ? "text-white text-center"
                        : "text-black text-center"
                    }
                  >
                    {index + 1}
                  </p>
                  <p
                    className={
                      localStorage.getItem("theme") == "dark"
                        ? "text-white text-center"
                        : "text-black text-center"
                    }
                  >
                    {item.name}
                  </p>
                  <p
                    className={
                      localStorage.getItem("theme") == "dark"
                        ? "text-white text-center"
                        : "text-black text-center"
                    }
                  >
                    {item.symbol}
                  </p>
                  <p
                    className={
                      localStorage.getItem("theme") == "dark"
                        ? "text-white text-center hidden sm:hidden md:hidden xl:block 2xl:block"
                        : "text-black text-center hidden sm:hidden md:hidden xl:block 2xl:block"
                    }
                  >
                    {item.contract_address}
                  </p>
                  <p
                    className={
                      localStorage.getItem("theme") == "dark"
                        ? "text-white text-center"
                        : "text-black text-center"
                    }
                  >
                    {item.asset_platform_id}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      {!loading && load < 250 ? (
        <p
          onClick={() => {
            setLoad(load + 50);
          }}
          className={
            localStorage.getItem("dark") == "dark"
              ? "w-28 h-8 bg-green-500 text-black text-sm font-bold mx-auto mt-10 text-center pt-1 rounded-sm cursor-pointer hover:scale-105 hover:transition-all"
              : "w-28 h-8 bg-black text-white text-sm font-bold mx-auto mt-10 text-center pt-1 rounded-sm cursor-pointer hover:scale-105 hover:transition-all"
          }
        >
          Load More
        </p>
      ) : load > 200 ? (
        <p className="text-xl font-bold mt-10 mb-10 text-red-500 text-center">
          All NFT's loaded
        </p>
      ) : null}
    </div>
  );
}
