
export default function Button({from="usd" , to="inr" , OnConvertValues}){

    return (
        <div style={
            {
                textAlign:"center"
            }
        }>
            <button style={{
            width:"400px",
            padding:"10px",
            color:"white",
            backgroundColor:"#4949ff",
            textAlign:"center",
            marginBottom:"5px",
            borderRadius:"5px",
            cursor:"pointer",
            border:"none"
        }}
        onClick={OnConvertValues}>
            Convert {from} to {to}
        </button>
        </div>
      
    )
}