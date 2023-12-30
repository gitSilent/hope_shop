import { IProduct } from "../api/Models/models";
import ex from "../media/svg/ex.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


interface IProps {
    chosenProduct: IProduct,
    setModalProductActive: React.Dispatch<React.SetStateAction<boolean>>,

}


export default function ModalProductActive({ chosenProduct, setModalProductActive }: IProps) {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div onClick={() => { setModalProductActive(false) }} className="modal-close fixed z-10 w-[100vw] h-[100vh] bg-black/60">
            <div onClick={(e) => { e.stopPropagation() }} className="absolute p-[100px] left-0 right-0 top-0 bottom-0 m-auto max-w-[1180px] h-fit w-[90vw] bg-white">
                <img onClick={() => { setModalProductActive(false) }} src={ex} alt="" className="modal-close absolute w-[24px] h-[24px] top-[50px] right-[50px] hover:cursor-pointer hover:brightness-50 duration-150" />
                <div className="flex">
        <>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={9}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                >
                <SwiperSlide>
                    <img src={chosenProduct.Image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chosenProduct.Image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chosenProduct.Image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chosenProduct.Image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chosenProduct.Image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chosenProduct.Image} />
                </SwiperSlide>
            </Swiper>


            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2">
            <SwiperSlide>
                <img src={chosenProduct.Image} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={chosenProduct.Image} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={chosenProduct.Image} />
            </SwiperSlide>
            <SwiperSlide>
                    <img src={chosenProduct.Image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chosenProduct.Image} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chosenProduct.Image} />
                </SwiperSlide>
            </Swiper>
    </>
                    <div className='flex flex-col max-w-[401px] justify-between'>
                        <div>
                            <div className="font-medium text-[36px]">
                                {chosenProduct.ProductName}
                            </div>
                            <div className="text-[36px]">
                                {chosenProduct.Price} ₽
                            </div>
                            <div className="mt-[30px]">
                                {chosenProduct.Description}
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <button className='gbtn w-[400px] h-[50px] bg-[#303030] text-white'>Купить</button>
                            </div>
                            <div className="">
                                <button className='bbtn w-[400px] h-[50px] border-solid border-2 border-black mt-[10px]'>В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
