import React from 'react'
import ProductTab from './ProductTab'
import NavBar from '../navComponents/mainNav'
const ProductsContainer = () => {



  return (
    <div style={{ width: '100%', height: '100vh', overflowY: 'scroll' }}>
    <NavBar style={{ position: 'fixed', width: '100%', top: 0, zIndex: 100 }} />
    <ProductTab />
  </div>
  )

  
}

export default ProductsContainer
