import { useEffect, useState } from 'react'

function App() {
  const [products,setProducts] = useState([])
  const [page , setPage] = useState(1)
  const [totalPages , setTotalPages]= useState(0)
  
  const getProducts =async()=>{
    const data = await fetch(`https://dummyjson.com/products/?limit=10&skip=${10 *page -10}`);
    const jsonData = await data.json();

    if(jsonData && jsonData.products){
      setTotalPages(Math.floor(jsonData.total /10))
      setProducts(jsonData.products)   
    }
  }

  useEffect(()=>{
    getProducts();
  },[page])

  const selectPageHandler =(selectedPage)=>{
    if(selectedPage>0 && selectedPage<=totalPages)
    setPage(selectedPage);
  }
  console.log(totalPages)

  return (
    
     <div>  
      {
        products.length > 0 && ( <div className="products">
          {products.map((prod)=> <span className='product__single' key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <span>{prod.title}</span>
          </span>)}
        </div>
        )
      }

      { products.length &&( <div className='pagination'>
        <span
           className={page<=1? "pagination__disable":""}
           onClick={()=>selectPageHandler(page-1)}
           >◀️
        </span>
      
        {
          [...Array(10)].map((_,i)=>(
            <span
            className={page===i+1? "pagination__selected":""}
             key={i} onClick={()=>selectPageHandler(i+1)}>{(i+1)}</span>
          ))
        }
       
        <span 
              className={page >totalPages? "pagination__disable":""}
              onClick={()=>selectPageHandler(page+1)}
              >▶️
        </span>
      </div>)
      }
      </div> 

     
    
  )
}

export default App
