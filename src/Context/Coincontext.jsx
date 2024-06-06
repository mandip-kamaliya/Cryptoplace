import { createContext, useEffect, useState } from "react";



 export const Coincontext=createContext();


const Coincontextprovider=(props)=>{
    const [allcoin,setallcoin]=useState([]);
    const [currency,setcurrency]=useState({
        name:"usd",
        simbol:"$"
    })
    const fetchallcoin= async ()=>{
        const options = {method: 'GET', headers: {accept: 'application/json'}};

        fetch(`https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
          .then(response => response.json())
          .then(response => setallcoin(response))
          .catch(err => console.error(err));
    }
    useEffect(()=>{
        fetchallcoin();
    },[currency])
 
    const Contextvalue={

        allcoin,currency,setcurrency
    }
    return(
        <Coincontextprovider value={Contextvalue}>
            {props.children}
        </Coincontextprovider>
    )
}
