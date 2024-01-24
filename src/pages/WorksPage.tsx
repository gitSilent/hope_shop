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
            <div className=' mb-[20px] relative w-fit'>
              <div>
                <img className='' src={DOMAIN + item.attributes.Photo.data.attributes.url} alt=""/>
              </div>
              <div className='h-fit w-full absolute bottom-0 left-0 bg-black/40 z-[5] px-[5px]'>
                <span className='block text-white text-[12px] md:text-[15px] w-full'>{item.attributes.Title}</span>
              </div>
            </div>
          )
        })}
        
      </section>

      <Footer />

    </div>
  )
}
