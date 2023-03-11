import styles from '@/styles/Home.module.css'
import Product from "../components/Products"
import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import initMongoose from '@/lib/mongoose'
import { findAllProducts } from './api/products'
const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {

 
  const [phrase, setPhrase] = useState(" ")
 

  const categoriesName = [...new Set(products.map(p => p.category))]


  if (phrase) {
    products = products.filter(p => p.name.toLowerCase().includes(phrase));
  }
  else {
    products;
  }


  return (
  <Layout>
      <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products..." className='bg-gray-100 py-2 px-4 w-full rounded-xl' />
      <div>
        {categoriesName.map(categoryName => (
          <div key={categoryName}>
            {products.find(p => p.category === categoryName) && (
              <div>

                <h2 className='text-2xl py-5 capitalize'>{categoryName}</h2>
                <div className='flex space-x-8 mb-6 overflow-x-scroll snap-x scrollbar-hide'>
                  {products.filter(p => p.category === categoryName).map(productInfo => (
                    <div key={productInfo._id}>
                      <Product {...productInfo} />

                    </div>
                  ))}
                </div>



              </div>
            )}
          </div>

        ))}


      </div>


   </Layout>
  )
}
 export async function getServerSideProps(){
  await initMongoose()
  const products = await findAllProducts()
  return {
    props : {
      products : JSON.parse(JSON.stringify(products)),
    },
  }
 }