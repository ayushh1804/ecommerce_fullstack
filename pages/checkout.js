import React, { useContext, useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { ProductsContext } from '@/components/ProductsContext'
const checkout = () => {

  const { selectedProducts } = useContext(ProductsContext)
  const [productinfo, setProductInfo] = useState([])
  useEffect(() => {
    fetch('/api/products?ids=' + selectedProducts.join(','))
      .then(response => response.json())
      .then(json => setProductInfo(json));
  })
  return (
    <Layout>
      {selectedProducts.join(',')}
    </Layout>
  )
}

export default checkout
