import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
import { CircularProgress } from "@mui/material";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { getHistoricalData } from "../utils/api";
import Coin from "../components/Coin";

const CoinsDetail = () => {
  const [timeFrame, setTimeFrame] = useState(30);
  //calling the data from context api
  const { data, graph, setGraph } = useContext(CryptoContext);
  const { id } = useParams();

  //This will check if the data exists in the local storage if yes then display it otherwise fetch data
  let storedData = null;
  try {
    storedData = JSON.parse(localStorage.getItem("crypto"));
  } catch (e) {
    console.error("Failed to parse localStorage data", e);
  }
  const coinData = data.length > 0 ? data : storedData || [];

  const details = coinData?.filter(
    (details) => details.id == id.replace(":", "")
  );

  //The below is used to fetch the data from the graph api and use it in graph
  let currency = "usd";

  useEffect(() => {
    getHistoricalData(setGraph, details[0].id, timeFrame, (currency = "usd"));
  }, [details, timeFrame, currency]);

  const mappedData = graph.map((dataPoint) => ({
    date: new Date(dataPoint[0]).toDateString(),
    price: dataPoint[1],
  }));

  return (
    <div className="h-[100dvh] flex lg:flex-row md:flex-row sm:flex-col justify-center items-center p-5">
      {details.length == 0 ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <>
          <Coin
            id={id}
            image={details[0].image}
            name={details[0].name}
            price={details[0].current_price}
            totalVolume={details[0].total_volume}
            change={details[0].price_change_percentage_24h}
          />
          {/* <div className="flex flex-col justify-center items-center"> */}
          {mappedData.length > 0 ? (
            <ResponsiveContainer width="50%" height={300}>
              <nav>
                <ul className="flex justify-between items-center">
                  <li>
                    <button
                      className="text-white font-bold "
                      onClick={() => setTimeFrame(30)}
                    >
                      30 Days
                    </button>
                  </li>
                  <li className="ml-2">
                    <button
                      className="text-white font-bold "
                      onClick={() => setTimeFrame(180)}
                    >
                      6 Months
                    </button>
                  </li>
                  <li className="ml-2">
                    <button
                      className="text-white font-bold "
                      onClick={() => setTimeFrame(365)}
                    >
                      1 Years
                    </button>
                  </li>
                </ul>
              </nav>
              <LineChart
                width={600}
                height={300}
                data={mappedData}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis />
                <Tooltip />
                <YAxis />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex justify-center items-center">
              <CircularProgress />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CoinsDetail;
