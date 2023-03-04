import React from 'react'

const Products = ({name, price, description, picture}) => {
    return (
        <div className='w-64'>
            <h1 className='text-2xl mb-4'>{name}</h1>
            <img src={picture} alt="" className=' bg-blue-100 p-5 rounded-xl' />
            <h3 className='font-bold mt-2 text-lg'>{description}  </h3>
            <div className='flex mt-1'>
                <p className='text-2xl font-bold grow mt-1'>${price}</p>
                <button className='bg-emerald-400 px-3 py-1 rounded-xl text-white'>+</button>
            </div>
        </div>
    )
}

export default Products
