
const Button = ({content, onClick})=>{

    return(
        <button onClick={onClick} className="btn">{content}</button>
    )
}

export default Button;