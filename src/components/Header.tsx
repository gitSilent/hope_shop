import React, { useState } from "react";
import Sidebar from "./SideBar";
import { Link } from "react-router-dom";
import menu from "../media/svg/menu_burger.svg"
import logo from "../media/svg/logo.svg"
import profile from "../media/svg/profile.svg"

export default function Header() {
  const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(false);
  return (
    <div className="py-[8px] w-full z-[10] bg-white fixed items-center gap-4 sl:py-[16px]">
      <nav className="flex items-center mx-auto justify-between px-[20px] max-w-[1220px]">
        <Sidebar
          isSidebarOpened={isSidebarOpened}
          setIsSidebarOpened={setIsSidebarOpened}
        />
        <div className="w-[20px] h-[15px] sl:hidden">
          <img className="h-full w-full hover:cursor-pointer sl:hidden" onClick={() => { setIsSidebarOpened(true); }} src={menu} alt="menu" />
        </div>

        <a href="/"><img src={logo} alt="" className="w-[110px] hover:cursor-pointer" /></a>
        <div className="max-w-[615px] w-full font-medium px-[20px] hidden sl:block">
          <ul className="flex justify-between max-w-[615px] text-[18px] font-medium">
            <li><Link to={"/"}>Главная</Link></li>
            <li><Link to={"/products"}>Товары</Link></li>
            <li><Link to={"/services"}>Услуги</Link></li>
            <li><Link to={"/works"}>Наши работы</Link></li>

          </ul>
        </div>

        <Link to={'/login'}>
          <img src={profile} alt="" className="w-[30px]" />
        </Link>
      </nav>
    </div>
  );
}