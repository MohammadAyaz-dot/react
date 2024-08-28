import useCurrencyData from "../customHooks/fetchData";
import Button from "./Button";
import InputBox from "./InputBox";
import { useEffect, useState } from "react";


export default function CurrencyConverter(){

const [amount,setAmount]=useState(0);
const [convertedAmount,setConvertedAmount] =useState(0);
const [to,setTo] =useState("inr");
const [from,setFrom] =useState("usd");

const data = useCurrencyData(from);

const handleCoversion = ()=>{

    const conversionRate= data[to];
    let ans = amount * conversionRate;
    console.log(ans)
    setConvertedAmount(ans)
}

const handleSwap=()=>{
    setAmount(convertedAmount);
    setConvertedAmount(amount);
    setFrom(to);
    setTo(from);
}


const currencyOptions = Object.keys(data)
    return(
        <div className="converterContainer">
            <InputBox
             currencyOptions={currencyOptions} 
             label={"From"}
             disabled={false} 
             onAmountChanged={(e)=>setAmount(e.target.value)} 
             amount={amount}
             onCurrencyChanged={(value)=>setFrom(value)}
             selectCurrency={from}></InputBox>
            
            <div style={{ position:"relative"}}>
                <button
                style={{
                    position:"absolute",
                    backgroundColor:"#4949ff",
                    padding:"8px",
                    borderRadius:'5px',
                    border:"none",
                    color:"white",
                    left:"40%",
                    top:"-20px",
                    cursor:"pointer"
                }}
                 onClick={handleSwap}>SWAP</button>
            </div>
            
           
            <InputBox 
            currencyOptions={currencyOptions} 
            label={"To"} 
            amount={convertedAmount} 
            onCurrencyChanged={(value)=>setTo(value)}
            selectCurrency={to}></InputBox>
           
            <Button from={from.toUpperCase()} to={to.toUpperCase()} OnConvertValues={handleCoversion}></Button>
        </div>
    )
}