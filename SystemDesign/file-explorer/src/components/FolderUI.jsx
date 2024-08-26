import { useState } from "react"

export default function FolderUI({folderData}){
    const [visible,setVisible] = useState(false)
    const [showInput,setShowInput] = useState({
        isFolder:null,
        visible:false
    })

    const onFolderClick=(e,isFolder)=>{
        setVisible(true)
        e.stopPropagation();
        setShowInput({visible:true,isFolder})
    }
    
    // console.log(folderData)
    if(folderData.isFolder)
    return(
        <div style={{ marginTop:"5px"}}>
            <div className="folder" onClick={()=> setVisible(!visible)}>
                 <span> 📁{folderData.name}</span>
                 <div>
                     <button onClick={(e)=>onFolderClick(e,true)}>Folder +</button>
                     <button onClick={(e)=>onFolderClick(e,false)}>File +</button>
                </div>
            </div>

            <div style={{
                paddingLeft:"25px",
                display:visible?"block":"none"
            }}>
                {
                    showInput.visible && (
                        <div className="inputContainer">
                            <span>{showInput.isFolder ? "📁" : "📄"}</span>
                            <input className="inputContainer-input"
                            type="text"
                            onBlur={()=>{setShowInput({...showInput,visible:false})}}
                            autoFocus />

                        </div>
                    )
                }
          
                 {folderData.items.map((data)=> <FolderUI key={data.id} folderData={data}/>)}
          </div>
           
       
        </div>
    )
    else
    return(  <span className="file">📄 {folderData.name}</span>)
}