import { IProduct } from "../api/Models/models";

export default function Product({Image, ProductName, Price, Description}:IProduct) {
  return (
    <div>
      <img src={Image} alt="img" />
      <h2>{ProductName}</h2>
      <span>{Price}</span>
    </div>
  )

}
