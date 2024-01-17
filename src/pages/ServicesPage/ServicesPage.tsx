import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Header from '../../components/Header'
import Footer from '../../components/Footer';
import ModalServices from '../../components/ModalServices';
import { getServiceTypes, getServices } from '../../api/reqs';
import { IService } from '../../api/Models/models';

import "./stylesQuestion.css"
import 'react-toastify/dist/ReactToastify.css';

// Страница, на которой представлены все услуги
export default function ServicesPage() {
  const [selected, setSelected] = useState(null);
  const [checkedArray, setCheckedArray] = useState<IService[]>()
  const [isModalServicesActive, setIsModalServicesActive] = useState<boolean>(false)

  const [services, setServices] = useState<IService[]>()
  const [serviceTitles, setServiceTitles] = useState<string[]>()

  // Получаем список всех услуг и их типов
  useEffect(()=>{
    getServiceTypes()
    .then((res)=>{
      let onlyTitles = res.data.data.map((item)=>item.attributes.Title)
      setServiceTitles(onlyTitles)
    })

    getServices()
      .then(function (response) {
        setServices(response.data.data)
      })
      .catch(function (error) {
        console.error(error);
      })
      
     
  },[])

// Функция для установки статуса "Checked" для чекбокса услуги
  const toggle = (e:any, i: any) => {
    if(e.target.type !== "checkbox"){
      if (selected === i) {
        return setSelected(null);
      }
      setSelected(i);
    }
  };

  // Если выбираемая услуга уже была отмечена, то убираем ее из списка выбранных
  // иначе - добавляем 
  const onCheck = (id:number)=> {
    if(!checkedArray?.some(e => e.id === id)){
      let idService = services?.findIndex(e => e.id === id)
      if(services && idService !== undefined){
        let serviceToArr = services[idService]
        setCheckedArray([...checkedArray ? checkedArray : [], serviceToArr])
      }
    }else{
      setCheckedArray(checkedArray?.filter((item)=>item.id !== id))
    }
  }

  //Функция, открывающая модальное окно оформления заказа
  function buyServices(){
    if (checkedArray?.length){
      setIsModalServicesActive(true)
    }
  }

   

  return (
    <div className='relative min-h-[100%] pb-[150px] overflow-auto'>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
      <Header />
      {isModalServicesActive && checkedArray?.length
        ? <ModalServices checkedArray={checkedArray} setModalServicesActive={setIsModalServicesActive} />
        : <></>
      }
      <section className=' pt-[115px] max-w-[1220px] font-semibold text-[40px] px-[20px] mx-auto'>
        <h1>Услуги</h1>
      </section>

      <div className="h-fit relative mx-auto max-w-[1220px] pb-[50px] overflow-x-hidden pt-[50px]">
        {serviceTitles?.map((serviceTitle,idx)=>{
          return(
            <section className="flex flex-col md:flex-row relative px-[20px] hideScroll mb-[130px]">
              <div className='hidden md:block mr-[65px] min-w-[240px] max-w-[250px] h-[100px]'>
                <span className='block font-extrabold text-[26px] border-t-[7px] border-black'>{serviceTitle}</span>
              </div>

              <div className='block md:hidden mr-[65px] min-w-[240px] max-w-[250px]'>
                <span className='block font-extrabold text-[26px]'>{serviceTitle}</span>
              </div>

              <section className='wrapper'>
                <div className='accordion'>
                {serviceTitles && services?.map((item, idx)=>{
                  if(item?.attributes?.service_type?.data?.attributes?.Title === serviceTitle){
                    return (
                      <div className='' key={item.id}>
                        <div className='item hover:cursor-pointer' key={idx} onClick={(e) => toggle(e,idx)}>
                          <div className='title'>
                            
                            <div className='flex items-center gap-[30px]'>
                              <input onChange={()=>{onCheck(item.id)}} type="checkbox" className='w-[30px] h-[30px]' />
                              <h2 className={`text-[20px] md:text-[24px] max-w-[90%] font-bold text-left pt-[5px] ${selected === idx ? 'active-title' : 'not-active-title'}`}>{item.attributes.Title}</h2>
                            </div>
                            
                            <div className='flex items-center gap-[30px] font-normal text-[25px]'>
                              <span className='whitespace-nowrap'>{item.attributes.Price} ₽</span>
                              <span className={`block text-center text-[32px] font-light ${selected === idx ? 'rotate-45' : 'rotate-0'} duration-100`}>+</span>
                            </div>

                          </div>
                          <div className={`font-normal text-[16px] text-[#787878] leading-[22.4px] ${selected === idx ? 'content show' : 'content'}`}>
                            {item.attributes.Desc}
                          </div>
                        </div>
                      </div>
                    )
                  }else{ 
                    return <></>
                  }
                })}
                </div>
              </section>
            </section>
          )
        })}
        </div>

        {checkedArray?.length 
          ? <button onClick={buyServices} className='bbtn bg-gray-200 fixed font-semibold text-[26px] py-[10px] px-[40px] w-fit h-fit bottom-[180px] md:bottom-[130px] left-0 right-0 mx-auto border-[1px] border-solid border-black'>Заказать услуги</button>
          : <></>
        }

        <Footer />
    </div>
  )
}
