import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import product_example from "../media/product_example.png"
import product_example1 from "../media/product_example1.webp"
import product_example3 from "../media/product_example2.webp"


export default function WorksPage() {
  return (
    <div className='relative min-h-[100%] pb-[150px]'>
      <Header />

      <section className='pt-[115px] max-w-[1220px] font-semibold text-[20px] md:text-[40px] px-[20px] mx-auto'>
        <h1>Наши работы</h1>
      </section>

      <section className='mx-auto max-w-[1220px] px-[20px] gap-y-[20px] gap-x-[20px] columns-2 sl:columns-3 md:columns-4 '>
        <img className='mb-[20px]' src={product_example1} alt=""/>
        <img className='mb-[20px]' src={product_example} alt=""/>
        <img className='mb-[20px]' src={product_example1} alt=""/>
        <img className='mb-[20px]' src={product_example3} alt=""/>
        <img className='mb-[20px]' src={product_example1} alt=""/>
        <img className='mb-[20px]' src={product_example1} alt=""/>
        <img className='mb-[20px]' src={product_example} alt=""/>
        <img className='mb-[20px]' src={product_example3} alt=""/>
        <img className='mb-[20px]' src={product_example1} alt=""/>
        <img className='mb-[20px]' src={product_example3} alt=""/>
        <img className='mb-[20px]' src={product_example1} alt=""/>
        <img className='mb-[20px]' src={product_example3} alt=""/>
        <img className='mb-[20px]' src={product_example1} alt=""/>
        <img className='mb-[20px]' src={product_example} alt=""/>
        <img className='mb-[20px]' src={product_example3} alt=""/>
        <img className='mb-[20px]' src={product_example} alt=""/>
        <img className='mb-[20px]' src={product_example1} alt=""/>
        

      </section>

      <Footer />

    </div>
  )
}
