import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const [productinfo , setProductInfo] = useState([])

  useEffect(() => {
    fetch("/api/products")
    .then (response => response.json()) 
    .then(json => setProductInfo(json));
  }, []);
  console.log({productinfo})
  return (
    <div className='p-4'>
      <div>

        <div className='w-64'>
          <h1 className='text-2xl mb-4'>Mobiles</h1>
          <img src="/products/iphone.png" alt="" className=' bg-blue-100 p-5 rounded-xl' />
          <h3 className='font-bold mt-2 text-lg'>Iphone 14 Pro</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum hic pariatur quae, qui consequuntur labore ipsa? Nesciunt  </p>
          <div className='flex mt-1'>
          <p className='text-2xl font-bold grow mt-1'>$899</p>
          <button className='bg-emerald-400 px-3 py-1 rounded-xl text-white'>+</button>
          </div>
        </div>

      </div>
    </div>
  )
}
