import React from 'react'
import ProductTab from './ProductTab'
import NavBar from '../navComponents/mainNav'
const ProductsContainer = () => {



  return (
    <div style={{ width: '100%', height: '100vh',overflowY:"hidden" }}>
    <NavBar style={{ position: 'fixed', width: '100%', top: '0',bottom:'0' }} />
    <ProductTab style={{top:"0"}} />
  </div>
  )

  
}

export default ProductsContainer
