import { useEffect, useState } from 'react'

function App() {
  const [products,setProducts] = useState([])
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

  console.log(Array.isArray(products))

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
      </div> 
     
    
  )
}

export default App
