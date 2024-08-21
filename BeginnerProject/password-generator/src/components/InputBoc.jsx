
export default function InputBox(){

    return (
        <>
        <div className="container flex gap-2 p-4 border border-black ">
            
                <input className=" pl-4 border border-black input flex-grow rounded-md"
                type="text"
                placeholder="Passwod"
                value={"a"}
                disabled         
                />
         
            <div className="btn">
                <button className="border border-black rounded-md p-2 w-20 bg-black text-white font-bold">Copy</button>
            </div>
        </div>
        </>
    )
}