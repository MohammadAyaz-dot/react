
export default function ColorButton(props:any){

    return(
        <button style={
            {
                padding:"15px",
                margin:"1px",
                backgroundColor:props.color,
                color:"white",
                textAlign:"center",
                border:"2px solid #ccc",
                borderRadius:"15px",
                fontWeight:"bold"

            }
        } onClick={props.onChangeBg}> {props.color}</button>
    )
}