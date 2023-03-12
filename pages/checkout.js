import React, { useContext, useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { ProductsContext } from '@/components/ProductsContext'
const checkout = () => {

  const { selectedProducts,setSelectedProducts } = useContext(ProductsContext)
  const [productinfos, setProductInfos] = useState([])
  useEffect(() => {
    const uniqueIds = [...new Set(selectedProducts)];
    fetch('/api/products?ids=' + selectedProducts.join(','))
      .then(response => response.json())
      .then(json => setProductInfos(json));
  }, [selectedProducts]);

const addProduct = (id) => {
  setProductInfos(prev => [...prev,id])
}
const removeProduct = (id) => {
  
}


  return (
    <Layout>
      {!productinfos.length && (
        <div>Your Cart is Empty</div>
      )}
      {productinfos.length && productinfos.map(productinfo => (
        <div className='flex mb-5'>
          <div className='bg-gray-100 p-3 rounded-xl'>
            <img src={productinfo.picture} alt="" className='w-24' />
          </div>
          <div><h3 className='font-bold text-lg'>{productinfo.name}</h3>
            <p className='text-sm leading-4 w-1/2 text-gray-500'>{productinfo.description}</p>
            <div className='flex'>
              <div className='grow'>
                ${productinfo.price}
              </div>
              <div className=''>
                <button onClick={() => removeProduct(productinfo._id)} className='bg-red-500 px-2 text-white rounded-lg '>-</button>
                <span className='px-4'>
                {selectedProducts.filter(id => id === productinfo._id).length}</span>
                <button onClick={() => addProduct(productinfo._id)} className='bg-green-500 text-white  px-2 rounded-lg '>+</button>

              </div>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default checkout
