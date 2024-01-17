import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { IOurWork } from '../api/Models/models'
import { DOMAIN, getOurWorks } from '../api/reqs'

// Страница с фотографиями работ ателье
export default function WorksPage() {
  const [ourWorks, setOurWorks] = useState<IOurWork[]>()
  
  // Функция получения всех работ ателье 
  useEffect(()=>{
      getOurWorks()
      .then((res)=>{
          setOurWorks(res.data.data)
      })
  },[])

  return (
    <div className='relative min-h-[100%] pb-[150px]'>
      <Header />

      <section className='pt-[115px] max-w-[1220px] font-semibold text-[20px] md:text-[40px] px-[20px] mx-auto'>
        <h1>Наши работы</h1>
      </section>

      <section className='mx-auto max-w-[1220px] px-[20px] gap-y-[20px] gap-x-[20px] columns-2 sl:columns-3 md:columns-4 '>
        {ourWorks?.map((item,idx)=>{
          return(
            <img className='mb-[20px]' src={DOMAIN + item.attributes.Photo.data.attributes.url} alt=""/>
          )
        })}
      </section>

      <Footer />

    </div>
  )
}
