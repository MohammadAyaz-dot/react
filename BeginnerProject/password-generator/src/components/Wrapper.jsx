
export default function Wrapper({children}){

    return(
    <div style={{
        padding:"16px",
        margin:"16px",
        border:"1px solid #ccc",

    }}>
        {children}
    </div>
    )
}