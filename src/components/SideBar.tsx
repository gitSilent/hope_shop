import React from "react";
import { Link } from "react-router-dom";
import menu from "../media/svg/menu_burgerWhite.svg"

interface IProps {
  isSidebarOpened: boolean;
  setIsSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideBar({
  isSidebarOpened,
  setIsSidebarOpened,
}: IProps) {
  return (
    <div
      className={`fixed top-0 left-0 z-80 h-full w-[70vw] bg-black ease-in-out duration-300 ${
        isSidebarOpened ? "translate-x-0 " : "-translate-x-full"
      }`}
    >
        <div className="w-[20px] h-[15px] ml-[20px] mt-[30px] mb-5">
            <img
                className="h-full w-full hover:cursor-pointer"
                onClick={() => {
                setIsSidebarOpened(false);
                }}
                src={menu}
                alt="menu"
            />
        </div>
      <div>
          <Link to={"/"} className="block px-3 py-5 text-2xl text-white pl-[25px] hover:bg-slate-600 hover:cursor-pointer duration-100">Главная</Link>
          <hr className="bg-black h-[1px]" />
          <Link to={"/products"} className="block px-3 py-5 text-2xl text-white pl-[25px] hover:bg-slate-600 hover:cursor-pointer duration-100">Товары</Link>
          <hr className="bg-black h-[1px]" />
          <Link to={"/services"} className="block px-3 py-5 text-2xl text-white pl-[25px] hover:bg-slate-600 hover:cursor-pointer duration-100">Услуги</Link>
          <hr className="bg-black h-[1px]" />
          <Link to={"/works"} className="block px-3 py-5 text-2xl text-white pl-[25px] hover:bg-slate-600 hover:cursor-pointer duration-100">Наши работы</Link>
  
      </div>
    </div>
  );
}