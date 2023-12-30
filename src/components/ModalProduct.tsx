import { IProduct } from "../api/Models/models";
import ex from "../media/svg/ex.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';
import 'swiper/swiper-bundle.css';

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import { DOMAIN } from "../api/reqs";

//react-toastify modules
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IProps {
    chosenProduct: IProduct,
    setModalProductActive: React.Dispatch<React.SetStateAction<boolean>>,
}


export default function ModalProduct({ chosenProduct, setModalProductActive }: IProps) {

    const [windowDimensions, setWindowDimensions] = useState<{height:number, width:number}>();
    
    useEffect(() => {
       

        function handleResize() {
          setWindowDimensions({height:window.innerHeight, width:window.innerWidth});
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return (
        <div onClick={() => { setModalProductActive(false) }} className="modal-close fixed z-10 w-[100vw] h-[100vh] bg-black/60">
            <div onClick={(e) => { e.stopPropagation() }} className="absolute overflow-y-auto l:overflow-hidden p-[30px] lx:p-[70px] xm:p-[100px] left-0 right-0 top-0 bottom-0 m-auto max-h-[90vh] max-w-[1180px] l:max-h-[628px] h-fit w-[90vw] bg-white">
                <img onClick={() => { setModalProductActive(false) }} src={ex} alt="" className="modal-close fixed w-[24px] h-[24px] z-[5] top-[80px] lx:top-[50px] right-[60px] hover:cursor-pointer hover:brightness-50 duration-150 filter brightness-[40%] lx:filter-none" />
                <div className="flex flex-col gap-[40px] lx:flex-row">
                    <div className="flex flex-col-reverse gap-[10px] l:flex-row">
                        <div className="swiper-pagination swiper-product-pagination hideScroll"></div>
                        
                        <div className="flex">
                            <Swiper navigation={window.innerWidth > 1040 ? true : false} 
                            pagination={{
                                el: '.swiper-pagination',
                                clickable: true,
                                renderBullet: function (index: number, className: string) {
                                    return `
                                    <div class=${className}>
                                        <img src="${DOMAIN + chosenProduct.attributes.Photos.data[index].attributes.url}" alt="Thumbnail" ${index} />
                                    </div>
                                    `;
                                },
                            }}
                            modules={[Pagination, Navigation]} className="swiper-product">
                                {chosenProduct.attributes.Photos.data.map((item,idx)=>{
                                    return (
                                        <SwiperSlide><img src={DOMAIN + item.attributes.url} alt="" className="absolute top-0 left-0 h-full w-full object-cover" /></SwiperSlide>
                                    )
                                })}
                             
                            </Swiper>
                        </div>

                    </div>

                    <div className='flex flex-col lx:max-w-[400px] max-h-[430px] justify-between'>
                        <div>
                            <div className="font-medium text-[36px]">
                                {chosenProduct.attributes.Title}
                            </div>
                            <div className="text-[36px]">
                                {chosenProduct.attributes.Price} ₽
                            </div>
                            <div className="mt-[20px] text-[13px]">
                                {chosenProduct.attributes.Desc}
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <a href={`https://wa.me/79055456556?text=Здравствуйте, хочу приобрести ${chosenProduct.attributes.Title} (артикул ${chosenProduct.id})`}><button className='gbtn w-full h-[50px] bg-[#303030] text-white'>Купить</button></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
