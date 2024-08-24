import { useState } from "react"

export default function FolderUI({folderData}){
    const [visible,setVisible] = useState(false)
    // console.log(folderData)
    if(folderData.isFolder)
    return(
        <div style={{ marginTop:"5px"}}>
            <div className="folder" onClick={()=> setVisible(!visible)} style={{ cursor:"pointer" , background:"gray"}}>
                 <span> 📁 {folderData.name}</span>
            </div>

            <div style={{
                paddingLeft:"25px",
                display:visible?"block":"none"
            }}>
          
                 {folderData.items.map((data)=> <FolderUI key={data.id} folderData={data}/>)}
          </div>
           
       
        </div>
    )
    else
    return(  <span className="file">📄 {folderData.name}</span>)
}