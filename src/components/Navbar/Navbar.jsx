import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import icon from "../../assets/arrow_icon.png"
import "./Navbar.css"
import { Coincontext } from "../../Context/Coincontext";
const Navbar = () => {
  const {setcurrency} =useContext(Coincontext);

  const handlecurrency=(e)=>{
      switch(e.target.value){
        case "usd":{
          setcurrency({name:"usd", Symbol:"$"});
          break;
        }
        case "euro":{
          setcurrency({name:"euro", Symbol:"€"});
          break;
        }
        case "inr":{
          setcurrency({name:"inr", Symbol:"₹"});
          break;
        }
        default:{
          setcurrency({name:"usd", Symbol:"$"});
          break;
        }
      }
  }
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      

      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
       
      </ul>

     <div className="nav-right">

        <div className="options">
          <select onChange={handlecurrency}>
            <option value="usd">USD</option>
            <option value="euro">EURO</option>
            <option value="inr">INR</option>
          </select>
        </div>
        <button className="nav-button">sign up <img src={icon}/></button>
      </div>
    </div>
  );
};

export default Navbar;
