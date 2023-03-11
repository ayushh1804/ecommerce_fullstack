import React, { useContext } from 'react'
import { ProductsContext } from './ProductsContext'
const Products = ({ _id, name, price, description, picture }) => {
    const {setSelectedProducts} = useContext(ProductsContext);
    const addProduct = () => {
        setSelectedProducts(prev => [...prev, _id]);
    }
    return (
        <div className='w-full'>
            <h1 className='text-2xl mb-4'>{name}</h1>
            <img src={picture} alt="" className=' bg-blue-100 p-5 rounded-xl' />
            <h3 className='font-bold mt-2 text-lg'>{description}  </h3>
            <div className='flex mt-1'>
                <p className='text-2xl font-bold grow mt-1'>${price}</p>
                <button onClick={addProduct} className='bg-emerald-400 px-3 py-1 rounded-xl text-white'>+</button>
            </div>
        </div>
    )
}

export default Products
