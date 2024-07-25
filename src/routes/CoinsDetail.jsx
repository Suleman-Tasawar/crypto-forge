import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
import Coin from "../components/Coin";
import { LineChart } from '@mui/x-charts/LineChart';

const CoinsDetail = () => {
  const { data ,graph} = useContext(CryptoContext);
  const { id } = useParams();
  const details = data.filter((details) => details.id == id.replace(":", ""));


  const marketData = graph.map((item, index) => ({
    price: item[1],
  }));
  const keyToLabel = {
    price: '30 Days Prices',

  };

  const stackStrategy = {
    stack: 'total',
    area: true,
    stackOffset: 'none',
  };
  
  const customize = {
    height: 300,
    legend: { hidden: true },
    margin: { top: 5 },
    stackingorder: 'descending',
  };

  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col justify-center items-center p-5">
      <Coin
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
          dataKey: 'year',
          valueFormatter: (value) => value.toString(),
          min: 1,
          max: 30,
        },
      ]}
      series={Object.keys(keyToLabel).map((key) => ({
        dataKey: key,
        label: keyToLabel[key],
        showMark: false,
        ...stackStrategy,
      }))}
      dataset={marketData}
      {...customize}
    />
      </div>

    </div>
  );
};

export default CoinsDetail;
