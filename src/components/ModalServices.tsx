import { IProduct, IService } from "../api/Models/models";
import ex from "../media/svg/ex.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


interface IProps {
    checkedArray: IService[],
    setModalServicesActive: React.Dispatch<React.SetStateAction<boolean>>,

}



export default function ModalServices({ checkedArray, setModalServicesActive }: IProps) {
  
  useEffect(()=>{
    console.log(checkedArray);
  },[])

    return (
        <div onClick={() => { setModalServicesActive(false) }} className="modal-close fixed z-10 w-[100vw] h-[100vh] bg-black/60">
            <div onClick={(e) => { e.stopPropagation() }} className="absolute p-[35px] lg:p-[100px] left-0 right-0 top-0 bottom-0 m-auto max-w-[1180px] h-fit w-[90vw] bg-white">
                <img onClick={() => { setModalServicesActive(false) }} src={ex} alt="" className="modal-close absolute w-[24px] h-[24px] top-[50px] right-[50px] hover:cursor-pointer hover:brightness-50 duration-150" />
                <div className="flex">
                  <div className="wrap grid mx-auto">
                    <h1 className=" text-[24px] lg:text-[64px] font-bold">Заказать услуги</h1>

                    <h3 className=" mt-[30px] mb-[10px] lg:text-[20px] font-semibold">Вами выбрано:</h3>
                    {checkedArray.map((Item, idx) => {
                      return (
                        <div className=" italic">
                          {idx+1}. {Item.attributes.Name}
                        </div>
                      )
                    })}
                    {/* Здесь надо сделать вывод выбранных услуг */}

                    <h3 className="mt-[30px] mb-[15px] lg:text-[20px] font-semibold">Заполните контактные данные</h3>

                    <div className="inputs grid gap-[15px]">
                      <input placeholder="Имя*" className="py-[16px] pl-[20px]  lg:w-[550px] border-2 border-solid border-[#2B2B2B]" type="text" />
                      <input placeholder="Номер телефона*" className="py-[16px] pl-[20px] lg:w-[550px] border-2 border-solid border-[#2B2B2B]" type="tel" name="tel" id="tel" />
                      <input placeholder="Описание заявки" className="py-[16px]  pl-[20px] lg:w-[550px] border-2 border-solid border-[#2B2B2B]" type="text" />
                    </div>
                    <button className="gbtn mt-[35px] py-[16px] bg-[#303030] text-white">Оставить заявку</button>
                  </div>
                </div>
            </div>
        </div>



    )
}
