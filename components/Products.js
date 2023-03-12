import React, { useContext } from 'react'
import { ProductsContext } from './ProductsContext'
const Products = ({ _id, name, price, description, picture }) => {
    const {setSelectedProducts} = useContext(ProductsContext);
    const addProduct = () => {
        setSelectedProducts(prev => [...prev, _id]);
    }
    return (
        <div className='w-full'>
            <h1 className='text-lg mb-4 ml-20'>{name}</h1>
            <img src={picture} alt="" className=' bg-blue-100 p-5 rounded-xl w-80' />
            <h3 className='font-semibold text-gray-500 mt-2 text-lg'>{description}  </h3>
            <div className='flex mt-1'>
                <p className='text-2xl font-bold grow mt-1'>${price}</p>
                <button onClick={addProduct} className='bg-emerald-400 px-3 py-1 rounded-xl text-white'>+</button>
            </div>
        </div>
    )
}

export default Products
