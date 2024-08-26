import { useState } from 'react'


function App() {
  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];
  return (
    <>
    <FilterableProductTable product={PRODUCTS}></FilterableProductTable>
    </>
  )
}

export default App


function SearchBar(){

  return (

    <form>
      <input type="text" placeholder='' /><br/>
      <label>
        <input type="checkbox"/>
        {" "}
        Only Show Product in stock
      </label>
    </form>
  )
}

function ProductCategoryRow({category}){

  return(
    <tr>
      <th colSpan="2">
      {category}
      </th>
    </tr>
  )
}

function ProductRow({product}){
  const name = product.stocked? product.name:
  <span style={{color:"red"}}> {product.name}</span>

  return(
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

function ProductTable({product}){

  const rows =[];
  let lastCategory =null;

  product.forEach((product)=>{
    if(product.category!==lastCategory){
      rows.push(
        <ProductCategoryRow
        category={product.category}
        key={product.category}/>
      );
    }

    rows.push(
      <ProductRow
      product={product}
      key={product.name}/>
    );

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}


function FilterableProductTable({product}){

  return(
    <div>
         <SearchBar></SearchBar>
          <ProductTable product={product}/>
    </div>
  )
}