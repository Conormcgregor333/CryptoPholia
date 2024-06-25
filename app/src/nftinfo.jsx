import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function NFTInfo() {
  let { id } = useParams();
  let [data, setData] = useState({});
  let [loading, setLoading] = useState(true);
  let [currency, setCurrency] = useState("usd");
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
        `https://api.coingecko.com/api/v3/nfts/${id}`,
        options
      );
      let k = await d.json();
      if (k) {
        setData(k);
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
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
        <div>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-white text-xl font-bold text-center mt-10 mb-5"
                : "text-xl font-bold text-center mt-10 mb-5"
            }
          >
            {data.name}
          </p>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-center text-white text-md font-bold"
                : "text-md font-bold text-center"
            }
          >
            Symbol - {data.symbol}
          </p>
          <img
            className="block h-28 w-28 mx-auto mt-5 mb-5 rounded-full"
            src={data.image?.small}
            alt=""
          />
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-center text-white text-md font-bold"
                : "text-md font-bold text-center"
            }
          >
            Asset Platform -{" "}
            <span className="text-red-500">{data.asset_platform_id}</span>
          </p>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-center text-white text-md font-bold"
                : "text-md font-bold text-center"
            }
          >
            Contract Address -{" "}
            <span className="text-red-500">{data.contract_address}</span>
          </p>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-center text-white text-md font-bold"
                : "text-md font-bold text-center"
            }
          >
            Total supply -{" "}
            <span className="text-red-500">{data.total_supply}</span>
          </p>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-center text-white text-md font-bold mt-5 mb-5"
                : "text-md font-bold text-center mt-5 mb-5"
            }
          >
            Native Currency -{" "}
            <span className="text-red-500">{data.native_currency}</span>
          </p>

          <div className="flex justify-between w-52 mx-auto mt-5">
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-center text-white text-md font-bold "
                  : "text-md font-bold text-center"
              }
            >
              Price -{" "}
              {currency == "usd"
                ? "$" + data.floor_price.usd
                : "ETH" + data.floor_price.native_currency}
            </p>

            <select
              className="bg-yellow-500 text-sm font-bold ml-2 text-black w-20 h-6 rounded-sm"
              name=""
              id=""
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            >
              <option value="native_currency">ETH</option>
              <option value="usd">usd</option>
            </select>
          </div>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-center text-white text-md font-bold mt-5"
                : "text-md font-bold text-center mt-5"
            }
          >
            Market Cap -{" "}
            {currency == "usd"
              ? "$" + data.market_cap.usd
              : "ETH" + data.market_cap.native_currency}
          </p>
          <Link to={"/buy"}>
            <p className="w-20 h-10 font-bold bg-green-400 text-white text-center rounded-md cursor-pointer pt-2 mx-auto hover:bg-yellow-500 hover:text-black mt-10 mb-96">
              BUY
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
