import styles from '@/styles/Home.module.css'
import Product from "../components/Products"
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const [productinfo , setProductInfo] = useState([])
const [phrase, setPhrase] = useState(" ")
  useEffect(() => {
    fetch("/api/products")
    .then (response => response.json()) 
    .then(json => setProductInfo(json));
  }, []);

const categoriesName = [...new Set (productinfo.map(p => p.category))]




  return (
    <div className='p-5'>
      <input value={phrase} onChange={e =>setPhrase(e.target.value)} type="text" placeholder="search for products..." className='bg-gray-100 py-2 px-4 w-full rounded-xl' />
      <div>
      {categoriesName.map(categoryName => (
        <div key={categoryName}>
          <h2 className='text-2xl py-5 capitalize'>{categoryName}</h2>
          <div className='flex space-x-8 mb-6 overflow-x-scroll snap-x scrollbar-hide'>
          {productinfo.filter(p => p.category === categoryName).map(productInfo => (
            <div key={productInfo._id}>
            <Product {...productInfo} />
            </div>
          ))}
          </div>
          </div>
      ))}
        

      </div>
    </div>
  )
}
