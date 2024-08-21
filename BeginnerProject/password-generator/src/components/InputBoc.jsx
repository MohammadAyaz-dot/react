import { useRef } from "react"

export default function InputBox({password}){
    const inputRef = useRef(null);
// console.log(password)
const copyTpClipBoard=()=>{
    window.navigator.clipboard.writeText(password)
    inputRef.current?.select()
    console.log(inputRef.current)

}
    return (
        <>
        <div className="container flex gap-2 p-4 border border-black ">
            
                <input className="bg-black text-white pl-4 input flex-grow rounded-md"
                type="text"
                placeholder="Passwod"
                value={password}
                readOnly
                ref={inputRef}         
                />
         
            <div className="btn">
                <button
                onClick={copyTpClipBoard} className="rounded-md p-2 w-20 bg-black text-white font-bold">Copy</button>
            </div>
        </div>
        </>
    )
}