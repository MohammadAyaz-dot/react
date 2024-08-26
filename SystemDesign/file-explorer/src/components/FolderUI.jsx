import { useState } from "react"

export default function FolderUI({folderData,handleInsertNode}){
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

    const onAddFolder = (e)=>{
        if(e.keyCode === 13 && e.target.value){
            handleInsertNode(folderData.id,e.target.value,showInput.isFolder)
            setShowInput({...showInput,visible:false})
        }
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
                            onKeyDown={onAddFolder}
                            onBlur={()=>{setShowInput({...showInput,visible:false})}}
                            autoFocus />

                        </div>
                    )
                }
          
                 {folderData.items.map((data)=> 
                 <FolderUI
                   key={data.id}
                   folderData={data}
                   handleInsertNode={handleInsertNode}
                    />
                    )}
          </div>
           
       
        </div>
    )
    else
    return(  <span className="file">📄 {folderData.name}</span>)
}