
const fileExplorer ={
    id:1,
    name:"root",
    isFolder:true,
    items:[
        {
            id:2,
            name:"public",
            isFolder:true,
            items:[
                {
                    id:3,
                    name:"public nested 1",
                    isFolder:true,
                    items:[
                        {
                            id:4,
                            name:"index.html",
                            isFolder:false,
                            items:[]
                                
                        },
                        {
                            id:5,
                            name:"hello.hmtl",
                            isFolder:false,
                            items:[]
                        }
                       
                    ] 
                },
                {
                    id:6,
                    name:"public-netsed-file",
                    isFolder:true,
                    items:[]
                }
            ]
        },
        {
            id:7,
            name:"src",
            isFolder:true,
            items:[
                {
                    id:8,
                    name:"index.js",
                    isFolder:false,
                    items:[]
                },
                {
                    id:91,
                    name:"App.js",
                    isFolder:false,
                    items:[]
                }
            ]
        },
        {
            id:10,
            name:"package.json",
            isFolder:false,
            items:[]
        }
    ]
}

export default fileExplorer;