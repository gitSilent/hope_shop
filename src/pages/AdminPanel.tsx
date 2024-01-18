import React, { useEffect, useState } from 'react'
import logo from "../media/svg/logo.svg"
import logout from "../media/svg/logout.svg"
import { IRequest_Get } from '../api/Models/models'
import { getRequests } from '../api/reqs'
import { useNavigate } from 'react-router-dom'

// Страница с админ-панелью
export default function AdminPanel() {
    const [activeRequests, setActiveRequests] = useState<IRequest_Get[]>()
    const navigate = useNavigate()

    // Получаем заявки всех пользователей
    useEffect(()=>{
        getRequests("filters[Done][$eq]=false")
        .then((res)=>{
            console.log(res.data);
            setActiveRequests(res.data.data)
        })
    },[])

    //Функция выхода из аккаунта
    function exitAccount(){
        let hope_shop_jwt = `hope_shop_jwt=""; expires= Thu, 01 Jan 1970 00:00:00 GMT}`;
        document.cookie = hope_shop_jwt;
        navigate('/admin')
    }

  return (
    <div className='p-[20px]'>
        <div className='flex justify-between'>
            <div className='flex justify-center items-center gap-[10px]'>
                <a href="/"><img src={logo} alt="" className="w-[80px] md:w-[110px] hover:cursor-pointer" /></a>
                <span className='block text-[18px] md:text-[30px] font-medium'>| Панель администратора</span>
            </div>
            <img onClick={exitAccount} src={logout} alt="" className='w-[30px] md:w-[50px] hover:cursor-pointer'/>
        </div>

        <section className='mx-auto flex flex-col items-center mt-[50px] max-w-[1400px]'>
            <h1 className='text-[30px] font-bold'>Список всех активных заявок</h1>
            <table className='border-collapse border border-slate-500 w-full min-w-[480px] mt-[30px]'>
                <tr><th className='border border-slate-600'>Имя</th><th>Телефон</th><th className='border border-slate-600'>Заказанные услуги</th><th className='border border-slate-600'>Действие</th></tr> 
                {activeRequests?.map((item,idx)=>{
                    return(
                        <tr className='border border-slate-600'>
                            <td className='border border-slate-600 p-[8px]'>{item.attributes.Name}</td>
                            <td className='border border-slate-600 p-[8px]'>{item.attributes.Phone}</td>
                            <td  className='flex flex-col p-[8px]'>{item.attributes.services.data.map((item,idx)=><span>{idx+1}. {item.attributes.Title}</span> )}</td>
                            <td className='border border-slate-600 p-[8px]'><a href={`https://wa.me/79055456556?text=Здравствуйте, Ваш заказ номер ${item.id} принят в обработку, ожидайте сообщения.`} className='bg-green-400 font-semibold p-[8px] hover:bg-green-500 hover:cursor-pointer'>Написать в WhatsApp</a></td>

                        </tr> 
                    )
                })}
            </table>
        </section>
    </div>
  )
}
