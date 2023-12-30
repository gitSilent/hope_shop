import { useState } from "react";
import { IProduct } from "../api/Models/models";
import ModalProductActive from "./ModalProduct";

interface IProps {
  Image: string,
  ProductName: string,
  Price: number,
  openModal: () => void
}

export default function ProductCard({ Image, ProductName, Price, openModal }: IProps) {

  return (
    <div onClick={openModal} className="h-fit pb-[20px] hover:cursor-pointer">
      <div className="max-h-[165px] max-w-[165px] sl:max-h-[280px] sl:max-w-[280px] h-full w-full">
        <img src={Image} alt="img" className="h-full w-full object-cover" />
      </div>
      <h2 className="font-medium mt-[10px] text-[16px] md:text-[20px] md:mt-[15px]">{ProductName}</h2>
      <span className="font-normal mt-[10px] text-[16px] md:text-[20px] md:-[20px]">{Price} ₽</span>
    </div>
  )

}
