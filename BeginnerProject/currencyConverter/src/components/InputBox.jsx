import { useState } from "react"


export default function InputBox(
    {
     currencyOptions=[],
     label,
     disabled=true,
     onAmountChanged,
     onCurrencyChanged ,
     selectCurrency="usd",
     amount
    }){
 
    return(
        <>   
          <div className="container">    
            
             <div className="container__firstDiv">
                <label > {label}</label>
                <input type="number" disabled={disabled}
                value={amount}
                onChange={onAmountChanged}/>
                
             </div>

             <div className="container__secondDiv">
                <label> Currency Type</label>
                <select
                 value={selectCurrency}
                 onChange={ (e)=>onCurrencyChanged && onCurrencyChanged(e.target.value) }
                 >
                    
                    {
                        currencyOptions.map((cur)=>(
                            <option key={cur} value={cur}>
                                {cur}
                                </option>
                        ))
                    }

                </select>
             </div>

        </div>
           
        </>
    )
}