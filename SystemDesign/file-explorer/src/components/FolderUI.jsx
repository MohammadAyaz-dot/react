
export default function FolderUI({folderName}){

    return(
        <div style={{
            padding:"16px",
            margin:"10px",
            background:"gray",
            display:"flex",
            justifyContent:"space-between",
            width:"30%",
            borderRadius:"20px"
        }}>
            <div>
                
                <img src="../src/assets/download.png" alt="" style={{
                    width:"20px",
                    height:"20px",
                    paddingRight:"8px"
                }}/>
                 root
            </div>

            <div>
                <button>Folder +</button>
                <button>File +</button>
            </div>
        </div>
    )
}