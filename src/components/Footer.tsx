import { Link } from 'react-router-dom'

import logoWhite from "../media/svg/logoWhite.svg"
import tg_dark from "../media/svg/tg_dark.svg"
import vk_dark from "../media/svg/vk_dark.svg"

// Функция компонента Футер
export default function Footer() {
    return (
        <div className='flex absolute bottom-0 justify-between items-end bg-[#2B2B2B] w-full h-fit p-[20px] md:items-center'>
            <a className='hidden md:block' href="/"><img src={logoWhite} alt="" className='w-[85px] h-[49px] md:w-[149px] md:h-[86px]' /></a>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                <img src={logoWhite} alt="" className='w-[85px] h-[49px] md:w-[149px] md:h-[86px] md:hidden' />
                <div className='flex items-end gap-[15px] md:gap-[30px] mt-[15px] text-[#F4F4F4] text-[14px] md:text-[16px]'>
                    <div className='flex flex-col font-medium md:flex-row md:gap-[30px]'>
                        <Link to={'/services'}>Услуги</Link>
                        <Link to={'/prices'}>Цены</Link>
                        <Link to={'/#'}>Где находимся</Link>
                    </div>
                    <div className='flex flex-col font-medium md:flex-row md:gap-[30px]'>
                        <Link to={'/works'}>Наши работы</Link>
                        <Link to={'/products'}>Товары</Link>
                    </div>
                </div>
            </div>
            <div className='flex gap-[10px]'>
                <a href='#' className='h-[26px] w-[26px] md:w-[36px] md:h-[36px]'><img src={tg_dark} alt="" /></a>
                <a href='#' className='h-[26px] w-[26px] md:w-[36px] md:h-[36px]'><img src={vk_dark} alt="" /></a>
            </div>
        </div>
    )
}
