import React from "react";
// import Carousel from "react-material-ui-carousel";
// import TrendingNews from '../components/TrendingNews'
// import CoinsCarousal from "../components/CoinsCarousal";

import heroImg from "/assets/3d-casual-life-iphone-bitcoin.png";

const Home = () => {

  return (
    <div>
      <div className="w-full my-10 flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse justify-center items-center">
        <div className="lg:w-[40%] md:w-[60%] sm:w-[80%] p-5">
          <h1 className="text-6xl text-red-500 font-bold">
            Searching for a place to get all your querries about Crypto Coins.
          </h1>
          <button className="mt-10 w-[150px] h-10 bg-red-700 text-white hover:bg-red-600 rounded-md ">
            View Coins
          </button>
        </div>
        <div className="lg:w-[60%] md:w-[50%] sm:w-[80%]">
          <img
            className="w-full h-[300px] object-contain"
            src={heroImg}
            alt="hero image"
          />
        </div>
      </div>
      <div>
        <h1 className="text-center">Add the data from the carousal on line#30</h1>
        {/* <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          sx={{
            maxWidth: "600px",
            flexGrow: 1,
            margin: "auto",
            mt: 5,
          }}
        >
        <CoinsCarousal 
          coinImage = {}
          coinName = {}
          coinCurrentValue = {}
          coinCurrentPrice = {}/>
        </Carousel> */}

        <div className="mt-5">
          <h1 className="text-3xl font-black text-center text-red-600">
            {/* See whats trending on the Crypto Market */}Add trending new on line 58
          </h1>
        </div>
        {/* 
        <TrendingNews 
          newsLink={}
          newsImg={}
          newsTitle={}
          newsText={}
          newsCoinName={}
          newsName={}
          newsDate={}
          /> 
        */}
      </div>
    </div>
  );
};

export default Home;
