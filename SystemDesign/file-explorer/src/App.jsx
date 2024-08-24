import { useState } from 'react'
import FolderUI from './components/FolderUI'
import fileExplorer from './data/folderData'
function App() {
  const [data, setData] = useState(fileExplorer)
  // console.log(data)

  return (
    <>
    <FolderUI folderData ={data}></FolderUI>
    </>
  )
}

export default App
