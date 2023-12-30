import { useEffect, useState } from 'react'
import { IProduct } from '../api/Models/models'
import Header from '../components/Header'
import ModalProduct from '../components/ModalProduct'
import Product from '../components/ProductCard'
import product_example from "../media/product_example.png"
import Footer from '../components/Footer'
import { DOMAIN, getProducts } from '../api/reqs'

export default function ProductsPage() {
  const [chosenProduct, setChosenProduct] = useState<IProduct>()
  const [isModalProductActive, setIsModalProductActive] = useState<boolean>(false)
  const [products, setProducts] = useState<IProduct[]>()

  useEffect(()=>{
    getProducts()
    .then((res)=>{
      setProducts(res.data.data)
    })
  },[])
  
  useEffect(()=>{
    if (isModalProductActive) {
      document.body.classList.add('no-scroll');
    }
    else {
      document.body.classList.remove('no-scroll');
    }
  },[isModalProductActive])
  

  return (
    <div className='relative min-h-[100%] pb-[150px]'>
      <Header />
      {isModalProductActive && chosenProduct
        ? <ModalProduct chosenProduct={chosenProduct} setModalProductActive={setIsModalProductActive} />
        : <></>
      }

      <section className='pt-[115px] max-w-[1220px] font-semibold text-[20px] md:text-[40px] px-[20px] mx-auto'>
        <h1>Товары</h1>
      </section>

      <section className='max-w-[1220px] mx-auto mt-[30px] px-[20px] md:mt-[50px] grid grid-cols-2 sx:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products?.map((item) => {
          return (
            <Product openModal={() => {
              setChosenProduct(item)
              setIsModalProductActive(true)
            }} Image={DOMAIN + item.attributes.Photos.data[0].attributes.url} ProductName={item.attributes.Title} Price={item.attributes.Price} />
          )
        })}
      </section>

      <Footer />

    </div>
  )


}
