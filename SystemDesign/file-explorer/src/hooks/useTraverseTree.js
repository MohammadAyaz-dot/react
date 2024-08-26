
const useTraverseTree = ()=>{

    function insertNode(tree,folderId,item,isFolder){
    if(tree.id === folderId && tree.isFolder){
        tree.items.unshift({
            id :new Date().getTime(),
            name:item,
            isFolder,
            items:[]
        })
        return tree;
    }

    // Now using depth first search algorithm for nested folder
    let latestNode =[];
    latestNode = tree.items.map((obj)=>{
        return insertNode(obj,folderId,item,isFolder)
    })
    console.log(latestNode)

    return {...tree,items:latestNode }
   
}

// Delete Exising file and folder
const deleteNode=()=>{

}

//  Excercise Update existing file and folder
const updateNode =()=>{

}
    
    return {insertNode,deleteNode,updateNode}

}

export default useTraverseTree;