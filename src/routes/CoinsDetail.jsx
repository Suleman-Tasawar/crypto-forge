import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../context/CryptoContext";
import Coin from "../components/Coin";
import { CircularProgress } from "@mui/material";

const CoinsDetail = () => {
  const { data } = useContext(CryptoContext);
  const { id } = useParams();
  let storedData = null;
  try {
    storedData = JSON.parse(localStorage.getItem("crypto"));
  } catch (e) {
    console.error("Failed to parse localStorage data", e);
  }
  
  const coinData = data.length > 0 ? data : (storedData || []);
  
  const details = coinData?.filter((details) => details.id == id.replace(":", ""));

  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col justify-center items-center p-5">
      {details.length == 0 ? (
        <CircularProgress  />
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
        </>
      )}
    </div>
  );
};

export default CoinsDetail;
