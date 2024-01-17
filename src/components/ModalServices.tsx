import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IRequest_Post, IService } from "../api/Models/models";
import { toast } from "react-toastify";

import ex from "../media/svg/ex.svg"

import { postRequest } from "../api/reqs";
import { checkValidationPhone } from "../service/checkValidationPhone";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

interface IProps {
    checkedArray: IService[],
    setModalServicesActive: React.Dispatch<React.SetStateAction<boolean>>,

}

// Функция компонента модального окна оформления заказа на услуги
export default function ModalServices({ checkedArray, setModalServicesActive }: IProps) {
  
  const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm();
  const [isPhoneValid, setIsPhoneValid] = useState<boolean | null>(null)
  let sumOfOrder:number = 0
  
  // Функция отправки заявки 
  function sendRequest(data:any){
    let dataToSend:IRequest_Post = {
      data:{
        Name: data.Name,
        services: checkedArray.map((item)=>item.id),
        Phone: data.Phone,
        Desc: data.Desc
      }
    }

    postRequest(dataToSend)
    .then((res)=>{
      console.log(res);
      setModalServicesActive(false)
      toast('Вы успешно отправили заявку!', { type:'success', position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light",});
    }).catch((er)=>{
      toast('При отправке заявки произошла ошибка.', { type:'error', position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light",});
    })
  }

    return (
        <div onClick={() => { setModalServicesActive(false) }} className="modal-close fixed z-10 w-[100vw] h-[100vh] bg-black/60">
            <div onClick={(e) => { e.stopPropagation() }} className="absolute p-[35px] lg:p-[100px] left-0 right-0 top-0 bottom-0 m-auto max-w-[1180px] h-fit w-[90vw] bg-white">
                <img onClick={() => { setModalServicesActive(false) }} src={ex} alt="" className="modal-close absolute w-[24px] h-[24px] top-[50px] right-[50px] hover:cursor-pointer hover:brightness-50 duration-150" />
                <div className="flex">
                  <div className=" mx-auto">
                    <h1 className=" text-[24px] lg:text-[64px] font-bold">Заказать услуги</h1>

                    <h3 className=" mt-[30px] mb-[10px] lg:text-[20px] font-semibold">Вами выбрано:</h3>
                    {checkedArray.map((Item, idx) => {
                      sumOfOrder += Item.attributes.Price
                      return (
                        <div className="flex justify-between italic">
                          <span className="block"> {idx+1}. {Item.attributes.Title} </span>
                          <span className="whitespace-nowrap">{Item.attributes.Price} ₽</span>
                        </div>
                      )
                    })}

                    <hr />

                    <div className="flex justify-between items-center mt-[10px]">
                      <span className="block font-medium text-[24px]">Итого:</span>
                      <span className="block font-medium text-[24px]">{sumOfOrder} ₽</span>
                    </div>

                    <h3 className="mt-[30px] mb-[15px] lg:text-[20px] font-semibold">Заполните контактные данные</h3>
                    <form onSubmit={handleSubmit(sendRequest)} action="" className="w-full">
                      <div className="flex flex-col gap-[15px]">
                        <input {...register('Name', {required:true})} placeholder="Имя*" className="py-[16px] pl-[20px]  lg:max-w-[550px] border-2 border-solid border-[#2B2B2B]" type="text" />
                        {errors.Name && <span className="block text-red-500">Поле не может быть пустым</span>}
                        <input {...register('Phone', { required: true, onChange: () => { setIsPhoneValid(checkValidationPhone(getValues().Phone)) } })} placeholder="Номер телефона*" className="py-[16px] pl-[20px] lg:w-[550px] border-2 border-solid border-[#2B2B2B]" type="tel" />
                        {isPhoneValid !== null && !isPhoneValid
                          ? <span className="block text-red-500">Проверьте правильность ввода номера телефона</span>
                          : <></>
                        }
                        {errors.Phone && <span className="block text-red-500">Поле не может быть пустым</span>}
                        <input {...register('Desc', {required:true})} placeholder="Описание заявки" className="py-[16px]  pl-[20px] lg:max-w-[550px] border-2 border-solid border-[#2B2B2B]" type="text" />
                        {errors.Desc && <span className="block text-red-500">Поле не может быть пустым</span>}
                      </div>
                      <button onClick={handleSubmit(sendRequest)} className="gbtn w-full mt-[35px] py-[16px] bg-[#303030] text-white">Оставить заявку</button>
                    </form>
                  </div>
                </div>
            </div>
        </div>



    )
}


