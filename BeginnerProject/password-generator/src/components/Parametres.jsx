

export default function ParametresField({numAllowed , charAllowed, setCharAllowed, setNumAllowed}){

    return(
        <>
              
              <div className="allFields flex justify-center gap-3 border border-black mt-4 p-4 bg:dark">

              <div className="lenght flex align-middle gap-2 border border-black p-4">
              
                <label className="font-bold">Range</label>
                 <input type="range"
                 min={5}
                 max={25} />
                </div>
               
                <div className="num flex align-middle gap-1 border border-black p-4">

                    <label className="font-bold">Number Allowed</label>
                    <input type="checkbox"
                     checked={numAllowed}
                     onChange={()=> setNumAllowed(!numAllowed)} />
                </div>
            
                <div className="char flex align-middle gap-1 border border-black p-4">

                    <label className="font-bold">Char Allowed</label>
                    <input type="checkbox"
                    checked={charAllowed}
                    onChange={()=>setCharAllowed(!charAllowed)} />
                </div>           
          
              </div>

        </>
    )
}