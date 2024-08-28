

export default function InputBox({currencyData,label,fieldAllowed}){


    return(
        <>   
          <div className="container">    
            
             <div className="container__firstDiv">
                <label > {label}</label>
                <input type="text" disabled={fieldAllowed}
                value={0}/>
             </div>

             <div className="container__secondDiv">
                <label> Currency Type</label>
                <select>
                    <option>
                        inr
                    </option>
                </select>
             </div>

        </div>
           
        </>
    )
}