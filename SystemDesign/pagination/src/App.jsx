import { useEffect, useState } from 'react'

function App() {
  const [products,setProducts] = useState([])
  const [page , setPage] = useState(1)
  const getProducts =async()=>{
    const data = await fetch(`https://dummyjson.com/products/?limit=100`);
    const jsonData = await data.json();

    if(jsonData && jsonData.products){
      setProducts(jsonData.products)
    }
  }

  useEffect(()=>{
    getProducts();
  },[])

  const selectPageHandler =(selectedPage)=>{
    if(selectedPage>0 && selectedPage<=10)
    setPage(selectedPage);
  }

  return (
    
     <div>  
      {
        products.length > 0 && ( <div className="products">
          {products.slice(page*10-10,page*10).map((prod)=> <span className='product__single' key={prod.id}>
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
          [...Array(products.length/10)].map((_,i)=>(
            <span
            className={page===i+1? "pagination__selected":""}
             key={i} onClick={()=>selectPageHandler(i+1)}>{(i+1)}</span>
          ))
        }
       
        <span 
              className={page>=10? "pagination__disable":""}
              onClick={()=>selectPageHandler(page+1)}
              >▶️
        </span>
      </div>)
      }
      </div> 

     
    
  )
}

export default App
