import Marquee from "react-fast-marquee";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { DOMAIN, getOurWorks } from "../api/reqs";
import { IOurWork } from "../api/Models/models";

import main_screen_bg from "../media/main_screen_bg.png";
import card_1 from "../media/info_cards/card_1.png";
import card_2 from "../media/info_cards/card_2.png";
import card_3 from "../media/info_cards/card_3.png";
import card_4 from "../media/info_cards/card_4.png";
import card_5 from "../media/info_cards/card_5.png";
import card_6 from "../media/info_cards/card_6.png";
import about_bg from "../media/about_bg.png";
import about_bgMobile from "../media/about_bgMobile.png";
import telegram from "../media/svg/telegram.svg";
import vk from "../media/svg/vk.svg";

//Главная страница сайта
export default function MainPage() {
  const [ourWorks, setOurWorks] = useState<IOurWork[]>();

  //Получения списка всех работ ателье
  useEffect(() => {
    getOurWorks().then((res) => {
      setOurWorks(res.data.data);
    });
  }, []);

  return (
    <div className="relative min-h-[100%] pb-[150px]">
      <Header />
      {/* Секция главного экрана */}
      <section className="relative pt-[72px] h-[100vh] px-[20px]">
        <img
          src={main_screen_bg}
          alt=""
          className="z-[-1] absolute object-cover w-full h-full top-0 left-0"
        />
        <div className="max-w-[1180px] mx-auto">
          <h1 className="text-[36px] max-w-[260px] mt-[50px] text-white font-extrabold uppercase md:text-[96px] md:max-w-[675px]">
            Швейная мастерская в Калуге
          </h1>
          <p className="w-[80%] max-w-[560px] mt-[15px] text-[#D9D9D9] text-[14px] md:text-[20px] md:max-w-[789px] md:w-full">
            Швейное ателье, где искусство кроя и пошива воплощают ваши мечты в
            стильные и индивидуальные наряды, создавая неповторимый облик для
            каждого клиента.{" "}
          </p>

          <div className="flex flex-wrap gap-[14px] mt-[50px] md:mt-[65px]">
            <Link
              to={"/services"}
              className="px-[38px] py-[7px] border-[1px] leading-[24px] border-white text-white text-[17px] rounded-full font-semibold md:text-[32px] md:px-[70px] md:py-[13px] md:leading-[38px]"
            >
              Услуги
            </Link>
            <Link
              to={"/products"}
              className="px-[38px] py-[7px] border-[1px] leading-[24px] border-white bg-white text-[#2B2B2B] text-[17px] rounded-full font-semibold md:text-[32px] md:px-[70px] md:py-[13px] md:leading-[38px]"
            >
              Товары
            </Link>
          </div>
        </div>
      </section>

      {/* Секция с информационными карточками */}
      <section className="mx-auto flex flex-wrap justify-center max-w-[1220px] mt-[30px] px-[20px] gap-[45px] md:gap-[20px]">
        <img src={card_1} alt="" className="max-h-[160px]" />
        <img src={card_2} alt="" className="max-h-[160px]" />
        <img src={card_3} alt="" className="max-h-[160px]" />
        <img src={card_4} alt="" className="max-h-[160px]" />
        <img src={card_5} alt="" className="max-h-[160px]" />
        <img src={card_6} alt="" className="max-h-[160px]" />
      </section>

      {/* Секция с блоком об ателье */}
      <section className="relative  min-h-[278px] md:min-h-[188px] mt-[40px] md:pb-[160px] md:mt-[120px]">
        <div className="absolute z-[-1] h-[278px] w-full">
          <div className="md:hidden bg-black/60 absolute z-[1] w-full h-full"></div>
          <img
            src={about_bgMobile}
            alt=""
            className="md:hidden z-0 absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <img
          src={about_bg}
          alt=""
          className="hidden w-full h-full object-cover z-[-1] absolute md:block"
        />

        <div className="px-[20px] pt-[20px] max-w-[1220px] mx-auto">
          <h2 className="font-extrabold text-[26px] text-white uppercase leading-tight md:text-[36px] md:ml-[35%] l:text-[64px] ">
            Индивидуальность в каждом шве
          </h2>
          <p className="text-[#f4f4f4] text-[15px] font-normal mt-[15px] md:ml-[35%]">
            {" "}
            Искусство моды здесь переплетается с индивидуальным стилем, создавая
            уникальные образы с любовью к деталям и вниманием к вашим самым
            изысканным желаниям!{" "}
          </p>
        </div>
      </section>

      {/* Секция с фотографиями работ ателье */}
      <section className="mt-[40px]">
        <h2 className="font-semibold text-[24px] text-center md:text-[40px] md:mt-[100px]">
          {" "}
          Наши работы{" "}
        </h2>
        <Marquee autoFill speed={25} className="mt-[20px]">
          {ourWorks?.map((item, idx) => {
            return (
              <div className="relative w-[150px] h-[150px] ml-[10px] md:w-[300px] md:h-[300px] md:ml-[20px]">
                <img
                  src={DOMAIN + item.attributes.Photo.data.attributes.url}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            );
          })}
        </Marquee>
        <Marquee
          autoFill
          speed={25}
          direction="right"
          className="mt-[10px] md:mt-[20px]"
        >
          {ourWorks?.map((item, idx) => {
            return (
              <div className="relative w-[150px] h-[150px] ml-[10px] md:w-[300px] md:h-[300px] md:ml-[20px]">
                <img
                  src={DOMAIN + item.attributes.Photo.data.attributes.url}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            );
          })}
        </Marquee>
      </section>

      {/*Секция с интерактивной картой  */}
      <section className="mt-[40px] mb-[50px]">
        <h2 className="font-semibold text-[24px] text-center md:text-[40px] md:mt-[100px]">
          {" "}
          Как нас найти{" "}
        </h2>
        <div className="mt-[20px]">
          <YMaps>
            <div>
              <Map
                defaultState={{ center: [54.564736, 36.263641], zoom: 17 }}
                width={"100%"}
                height={`${window.innerWidth >= 768 ? "500px" : "270px"}`}
              >
                <Placemark geometry={["54.564736", "36.263641"]} />
              </Map>
            </div>
          </YMaps>
        </div>

        {/* Секция с информацией об ателье и графике его работы */}
        <div className="flex justify-center mt-[50px] px-[20px] md:gap-[95px]">
          <div className="flex flex-col max-w-[164px] md:gap-[95px] md:flex-row md:max-w-[1220px]">
            <div className="">
              <h3 className="text-[20px] font-bold">Адрес</h3>
              <p className="text-[16px] text-[#2b2b2b] font-medium">
                1-я Загородная улица, д. 2
              </p>
            </div>

            <div className="mt-[20px] md:mt-0">
              <h3 className="text-[20px] font-bold">График работы:</h3>
              <ul>
                <li>пн - выходной</li>
                <li>вт - 9:00 - 18:00</li>
                <li>ср - 9:00 - 18:00</li>
                <li>чт - 9:00 - 18:00</li>
                <li>пт - 9:00 - 18:00</li>
                <li>сб - 9:00 - 18:00</li>
                <li>сб - выходной</li>
              </ul>
            </div>
          </div>

          <div className="">
            <h3 className="text-[20px] font-bold">Мы в соц.сетях:</h3>
            <div className="flex items-center gap-[10px] mt-[15px] md:gap-[12px]">
              <img src={vk} alt="" />
              <span className="text-[16px]">@hope_atelie</span>
            </div>
            <div className="flex items-center gap-[10px] mt-[15px] md:gap-[12px]">
              <img src={telegram} alt="" />
              <span className="text-[16px]">@hope_atelie</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
