import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { Coincontext } from "../../Context/Coincontext";

const Home = () => {
  const {allcoin,currency}=useContext(Coincontext);
  const [displaycoin,setdisplaycoin]=useState([]);
  useEffect(()=>{
    setdisplaycoin(allcoin);
  },[allcoin]);
  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">
          Largest
          <br /> Crypto MarketPlace
        </h1>
        <p>
          welcome to world's largest cryptocurrency marketplace.sign in to
          explore more option.
        </p>

        <form>
          <input placeholder="Search here"></input>
          <button>Search</button>
        </form>
      </div>
     <div className="crypto-table">
      <div className="table-layout">
        <p>#</p>
        <p>Coins</p>
        <p>Price</p>
        <p style={{textAlign:"center"}}>24H Change</p>
        <p className="marketcap">Market Cap</p>
      </div>
      
      {
         displaycoin.slice(0,10).map((item,index)=>(
          <div className="table-layout" key={index}>

          </div>
         ))


      }  
      
      </div> 
    </div>
  );
};

export default Home;
