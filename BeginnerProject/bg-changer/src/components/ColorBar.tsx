

export default function ColorBar(props :any ):any{

    return(
        <div style={{
            display:"flex",
            gap:"20px",
            justifyContent:"center",
            padding:"16px",
            margin:"16px",
            border:"1px solid #ccc",
            flexWrap:"wrap",
            borderRadius:"15px",
            marginBottom:"30px"
        }}>
        {props.children}
        </div>
    )
}