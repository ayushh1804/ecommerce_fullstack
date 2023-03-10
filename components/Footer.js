import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from './ProductsContext';
const Footer = () => {

    const router = useRouter();
    const path = router.pathname;
    const {selectedProducts} = useContext(ProductsContext);
  
    return (
        <footer className='relative bottom-0 bg-white w-full mt-16 flex border-t border-gray-200 justify-center space-x-12'>
            <Link href={'/'}>
            <span className={(path === '/' ? "text-emerald-500 flex flex-col" : '')+ ' justify-center items-center'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    <span>Home</span></span></Link>

            <Link href={'/checkout'}>
            <span className={(path === '/checkout' ? "text-emerald-500 flex flex-col" : '')+ ' justify-center items-center'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                    <span>Cart <span className='bg-green-300 px-1 text-sm rounded-lg'>{selectedProducts.length}</span></span></span></Link>
        </footer >
    )
}

export default Footer
