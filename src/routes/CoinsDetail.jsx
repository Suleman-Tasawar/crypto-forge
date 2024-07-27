import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
import Coin from "../components/Coin";
import { LineChart } from "@mui/x-charts/LineChart";
import { CircularProgress } from "@mui/material";

const CoinsDetail = () => {
  const { data, graph } = useContext(CryptoContext);
  const { id } = useParams();
  const details = data.filter((details) => details.id == id.replace(":", ""));

  const graphidiedData = graph.map(([volume, price]) => ({
    volume,
    price,
  }));

  console.log(graphidiedData.slice(1, 30));
  const keyToLabel = {
    price: "30 Days Prices",
    volume: "30 days of volume",
  };
  const colors = {
    price: "lightgray",
    volume: "lightblue",
  };

  const stackStrategy = {
    stack: "total",
    area: true,
    stackOffset: "none",
  };

  const customize = {
    height: 300,
    legend: { hidden: true },
    margin: { top: 5 },
    stackingorder: "descending",
  };

  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col justify-center items-center p-5">
      {details.length == 0 ? (
        <CircularProgress />
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
          <div className="lg:ml-10 md:ml-5 sm:ml-0">
            <LineChart
              width={500}
              xAxis={[
                {
                  dataKey: "year",
                  valueFormatter: (value) => value.toString(),
                  min: 1,
                  max: 30,
                },
              ]}
              series={Object.keys(keyToLabel).map((key) => ({
                dataKey: key,
                label: keyToLabel[key],
                color: colors[key],
                showMark: false,
                ...stackStrategy,
              }))}
              dataset={graphidiedData.slice(0, 30)}
              {...customize}
              sx={{
                ".MuiLineElement-root": {
                  stroke: "#ffffff",
                },
                ".MuiMarkElement-root": {
                  stroke: "#ffffff",
                  fill: "#ffffff",
                },
                ".MuiChartsAxis-tickLabel": {
                  fill: "#ffffff",
                },
                ".MuiChartsAxis-line": {
                  stroke: "#ffffff",
                },
                ".MuiChartsLegend-label": {
                  fill: "#ffffff",
                },
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CoinsDetail;
