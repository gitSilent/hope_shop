import axios from "axios";
import { IProduct, IService, IServiceResponse } from "./Models/models";

const DOMAIN = "http://localhost:1337/"

export async function getProducts(){
    return await axios.get<IProduct[]>(DOMAIN + "url")
}

export async function getServices(){

    return await axios.get<IServiceResponse>(DOMAIN + 'api/good')
    
}

// getProducts()
// .then((res)=>{
//     console.log(res);
// })