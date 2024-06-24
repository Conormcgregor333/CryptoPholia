import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Chart from "react-google-charts";
export default function CoinInfo() {
  let { id } = useParams();
  let [data, setData] = useState({});
  let [currency, setCurrency] = useState("usd");
  let [loading, setLoading] = useState(true);
  let [chartData, setChartData] = useState([["Date", "Prices"]]);
  let [day, setDay] = useState(5);
  let options = {
    title: "Coin Historical Data",

    legend: { position: "bottom" },
  };
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
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${day}&interval=daily`,
        options
      );
      let k = await d.json();
      let data1 = [["Date", "Prices"]];

      if (k.prices) {
        k.prices.map((item) => {
          data1.push([
            `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
            item[1],
          ]);
        });
        setChartData(data1);
        console.log(data1);
      }
      /* the toLocaleDateString converts the date inside the fetched data to dd/mm/yyyy format then we use splice to remove last 
      5 characters of the date string and this returns dd/mm. */
    };
    getData();
  }, [currency, day]);
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
        `https://api.coingecko.com/api/v3/coins/${id}`,
        options
      );
      let k = await d.json();
      if (k) {
        console.log(k);
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
                ? "text-center text-white text-2xl font-bold mt-10"
                : "text-2xl font-bold mt-10 text-center"
            }
          >
            {data.name}-{data.symbol.toUpperCase()}
          </p>
          <img
            className="block mx-auto mt-10 mb-10 w-48 h-48 rounded-full"
            src={data.image.large}
            alt=""
          />
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-md font-bold text-center text-white mb-5"
                : "text-md font-bold text-center mb-5"
            }
          >
            Visit official page at{" "}
            <a
              className="text-purple-600"
              href={data.links.homepage[0]}
              target="_blank"
            >
              Link
            </a>
          </p>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-md font-bold text-center text-red-500 mb-5"
                : "text-md font-bold text-center text-red-500 mb-5"
            }
          >
            Rank {data.market_cap_rank}
          </p>
          {/*  <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "mt-5  mb-5 text-justify w-96 text-sm font-bold text-white"
                : "mt-5  mb-5 text-justify w-96 text-sm font-bold"
            }
          >
            {data.description.en}
          </p> */}
          <div className="flex justify-center">
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-md font-bold text-center mr-2 text-white"
                  : "text-md font-bold text-center mr-2"
              }
            >
              Price -{" "}
              <span className="text-green-500">
                {currency == "usd"
                  ? "$" + data.market_data.current_price.usd.toLocaleString()
                  : "₹" + data.market_data.current_price.inr.toLocaleString()}
              </span>
            </p>
            <select
              className="w-20 h-6 bg-yellow-400 text-sm font-bold text-black rounded-sm"
              name=""
              id=""
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            >
              <option value="usd">usd</option>
              <option value="inr">inr</option>
            </select>
          </div>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-md font-bold mt-5 mb-5 text-center text-white"
                : "text-md font-bold mt-5 mb-5 text-center"
            }
          >
            Market cap -{" "}
            <span className="text-red-500">
              {currency == "usd"
                ? "$" + data.market_data.market_cap.usd.toLocaleString()
                : "₹" + data.market_data.market_cap.inr.toLocaleString()}
            </span>{" "}
          </p>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-center mt-5 mb-5 text-md font-bold text-white"
                : "text-center mt-5 mb-5 text-md font-bold"
            }
          >
            Past Market data trend by days-
          </p>
          <div className="flex justify-center">
            <p
              className={
                localStorage.getItem("theme") == "dark"
                  ? "text-white text-md font-block text-center"
                  : "text-md font-block text-center"
              }
            >
              Days-{" "}
            </p>
            <select
              className="bg-yellow-500 text-sm font-bold text-black rounded-md ml-2"
              name=""
              id=""
              value={day}
              onChange={(e) => {
                setDay(e.target.value);
              }}
            >
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="w-72 mx-auto mb-5 mt-5">
            <Chart
              chartType="LineChart"
              data={chartData}
              height="100%"
              legend_toggle
              options={options}
            />
          </div>
          <p
            className={
              localStorage.getItem("theme") == "dark"
                ? "text-md font-bold mt-5 mb-5 text-center text-white"
                : "text-md font-bold mt-5 mb-5 text-center"
            }
          >
            Trust Score -{" "}
            <span style={{ color: data.tickers[0].trust_score }}>
              {data.tickers[0].trust_score.toUpperCase()}
            </span>
          </p>
          <p className="w-20 h-10 font-bold bg-green-400 text-white text-center rounded-md cursor-pointer pt-2 mx-auto hover:bg-yellow-500 hover:text-black">
            BUY
          </p>
        </div>
      )}
    </div>
  );
}
