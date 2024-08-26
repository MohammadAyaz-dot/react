import { useState } from 'react'
import FolderUI from './components/FolderUI'
import fileExplorer from './data/folderData'
import useTraverseTree from './hooks/useTraverseTree'
function App() {
  const [data, setData] = useState(fileExplorer)
  // console.log(data)

  const {insertNode} = useTraverseTree();

  const handleInsertNode =(folderId, item, isFolder)=>{
    const finalTree = insertNode(data,folderId,item,isFolder)

    setData(finalTree)
  }

  return (
    <>
    <FolderUI folderData ={data} handleInsertNode={handleInsertNode}></FolderUI>
    </>
  )
}

export default App
