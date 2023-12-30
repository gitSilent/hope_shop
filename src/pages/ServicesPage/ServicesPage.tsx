import { useEffect, useState } from 'react';
import Header from '../../components/Header'
import "./stylesQuestion.css"
import Footer from '../../components/Footer';
import ModalServices from '../../components/ModalServices';
import { IService, IServiceResponse } from '../../api/Models/models';
import axios from 'axios'
import { getServices } from '../../api/reqs';


// const data = {
//   rows: [
//     {

//       id: 0,
//       Name: "Morbi congue sodales pellentesque.",
//       content: `Pellentesque ac dignissim massa, eu dignissim urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu lectus sapien. Proin sodales sed neque ac tempor. Pellentesque ac dignissim massa, eu dignissim urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu lectus sapien. Proin sodales sed neque ac tempor.`,
//     },
//     { 
//       id: 1,
//       Name: "Morbi congue sodales pellentesque.",
//       content: `Pellentesque ac dignissim massa, eu dignissim urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu lectus sapien. Proin sodales sed neque ac tempor. Pellentesque ac dignissim massa, eu dignissim urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu lectus sapien. Proin sodales sed neque ac tempor.`,
//     },
//     {
//       id: 2,
//       Name: "Morbi congue sodales pellentesque.",
//       content: `Pellentesque ac dignissim massa, eu dignissim urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu lectus sapien. Proin sodales sed neque ac tempor. Pellentesque ac dignissim massa, eu dignissim urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu lectus sapien. Proin sodales sed neque ac tempor.`,
//     },

    
//   ],
// }


export default function ServicesPage() {
  const [selected, setSelected] = useState(null);
  const [checkedArray, setCheckedArray] = useState<IService[]>()
  const [isModalServicesActive, setIsModalServicesActive] = useState<boolean>(false)

  const [services, setServices] = useState<IService[]>()

  useEffect(()=>{
    getServices()
      .then(function (response) {
        let data = response.data;
        console.log(data)
        setServices(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      })
     
  },[])


  const toggle = (e:any, i: any) => {
    if(e.target.type !== "checkbox"){
      console.log(e.target.type);
      
      if (selected === i) {
        return setSelected(null);
      }
      setSelected(i);
    }
  };

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

    function buyServices(){
      if (checkedArray?.length){
        setIsModalServicesActive(true)
      }
    }

   

  return (
    <div className='relative min-h-[100%] pb-[150px]'>
      <Header />
      {isModalServicesActive && checkedArray?.length
        ? <ModalServices checkedArray={checkedArray} setModalServicesActive={setIsModalServicesActive} />
        : <></>
      }
      <section className=' pt-[115px] max-w-[1220px] font-semibold text-[40px] px-[20px] mx-auto'>
        <h1>Услуги</h1>
      </section>

      <div className="h-fit relative mx-auto max-w-[1220px] pb-[50px] overflow-x-hidden pt-[50px]">
        <section className="flex flex-col md:flex-row relative px-[20px] hideScroll mb-[130px]">
          <div className='hidden md:block mr-[65px] min-w-[240px] h-[100px]'>
            <span className='block font-extrabold text-[26px] border-t-[7px] border-black'>Услуги пошива</span>
          </div>
          <div className='block md:hidden mr-[65px] min-w-[240px]'>
            <span className='block font-extrabold text-[26px]'>Услуги пошива</span>
          </div>
          <section className='wrapper'>
            <div className='accordion'>
             {services?.map((item, idx)=>{
              return (
                <div className='' key={item.id}>
                  <div className='item hover:cursor-pointer' key={idx} onClick={(e) => toggle(e,idx)}>
                    <div className='title'>
                      <div className='flex items-center gap-[30px]'>
                        <input onChange={()=>{onCheck(item.id)}} type="checkbox" className='w-[30px] h-[30px]' />
                        <h2 className={`text-[20px] md:text-[24px] max-w-[90%] font-bold text-left pt-[5px] ${selected === idx ? 'active-title' : 'not-active-title'}`}>{item.attributes.Name}</h2>
                      </div>
                      <span className={`block text-center text-[32px] font-light ${selected === idx ? 'rotate-45' : 'rotate-0'} duration-100`}>+</span>
                    </div>
                    <div className={`font-normal text-[16px] text-[#787878] leading-[22.4px] ${selected === idx ? 'content show' : 'content'}`}>
                      {item.attributes.content}
                    </div>
                  </div>
                </div>
              )
             })}
              {/* {services?.map((item, idx) => (
                <div className='' key={item.id}>
                  <div className='item hover:cursor-pointer' key={idx} onClick={(e) => toggle(e,idx)}>
                    <div className='title'>
                      <div className='flex items-center gap-[30px]'>
                        <input onChange={()=>{onCheck(item.id)}} type="checkbox" className='w-[30px] h-[30px]' />
                        <h2 className={`text-[20px] md:text-[24px] max-w-[90%] font-bold text-left pt-[5px] ${selected === idx ? 'active-title' : 'not-active-title'}`}>{item.attributes.Name}</h2>
                      </div>
                      <span className={`block text-center text-[32px] font-light ${selected === idx ? 'rotate-45' : 'rotate-0'} duration-100`}>+</span>
                    </div>
                    <div className={`font-normal text-[16px] text-[#787878] leading-[22.4px] ${selected === idx ? 'content show' : 'content'}`}>
                      {item.attributes.content}
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
          </section>
        </section>

       
        </div>

        {checkedArray?.length 
          ? <button onClick={buyServices} className='bbtn fixed font-semibold text-[26px] py-[10px] px-[40px] w-fit h-fit bottom-[180px] md:bottom-[130px] left-0 right-0 mx-auto border-[1px] border-solid border-black'>Заказать услуги</button>
          : <></>
        }

        <Footer />
    </div>
  )
}
