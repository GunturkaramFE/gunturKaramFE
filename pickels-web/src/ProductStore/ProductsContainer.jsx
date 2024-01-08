import React from 'react'
import ProductTab from './ProductTab'
import NavBar from '../navComponents/mainNav'
const ProductsContainer = () => {



  return (
    <div style={{width:'100%',height:'100vh'}}>
      <NavBar/>
      <div style={{width:"100%",height:'100%'}}> 
      <ProductTab />
      </div> 
    </div>
  )

  
}

export default ProductsContainer
