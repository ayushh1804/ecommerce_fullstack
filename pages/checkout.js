import React, { useContext, useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { ProductsContext } from '@/components/ProductsContext'
const checkout = () => {
  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [pincode, setPincode] = useState('')
  const [email, setEmail] = useState('')
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext)
  const [productinfos, setProductInfos] = useState([])
  useEffect(() => {
    const uniqueIds = [...new Set(selectedProducts)];
    fetch('/api/products?ids=' + selectedProducts.join(','))
      .then(response => response.json())
      .then(json => setProductInfos(json));
  }, [selectedProducts]);

  const addProduct = (id) => {
    setProductInfos(prev => [...prev, id])
  }
  const removeProduct = (id) => {
    const pos = selectedProducts.indexOf(id);
    if (pos != -1) {

      setSelectedProducts(prev => {
        return prev.filter((value, index) => index !== pos);
      });
    }
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

      <div className='flex flex-col'>
        <input value={name} onChange={e => setName(e.target.value)} className='bg-gray-100 w-full rounded-lg px-4 py-2 mb-2' type="text" placeholder='Name' />
        <input value={street}  onChange={e => setStreet(e.target.value)} className='bg-gray-100 w-full rounded-lg px-4 py-2 mb-2' type="text" placeholder='House No/Flat No/Building No' />
        <input value={city}  onChange={e => setCity(e.target.value)} className='bg-gray-100 w-full rounded-lg px-4 py-2 mb-2' type="text" placeholder='City/District ' />
        <input  value={pincode} className='bg-gray-100 w-full rounded-lg px-4 py-2 mb-2'  onChange={e => setPincode(e.target.value)} type="text" placeholder='PinCode ' />
        <input value={email} className='bg-gray-100 w-full rounded-lg px-4 py-2 mb-2'  onChange={e => setEmail(e.target.value)} type="email" placeholder='Email Address' required />
      </div>


    </Layout>
  )
}

export default checkout
