import React from 'react'
import image from "../public/products/logo.png"
import Image from 'next/image'
const Navbar = () => {
    return (
        <div className='flex justify-around align-middle  bg-slate-400 rounded p-2 font-bold' >


            <div> <Image src={image} className='w-24 mt-1 ml-4' /></div>
            <div className='text-center flex justify-evenly mt-1' >
                <p className='cursor-pointer mx-16'>Home</p>
                <p className='cursor-pointer mx-16'>New Arrivals</p>
                <p className='cursor-pointer mx-16'>categories</p>
            </div >
            <div><button className='border p-2 hover:bg-slate-300 rounded-lg'>Signin</button></div>
        </div >


    )
}

export default Navbar
