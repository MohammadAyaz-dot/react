
const Wrapper = ({children})=>{

    return (
        <div style={{
            padding:"16px",
            margin:"16px",
            backgroundColor:"#ccc",
        }}>
            {children}
        </div>
    )
}

export default Wrapper;