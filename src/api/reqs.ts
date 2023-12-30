import axios from "axios";
import { IOurWork, IProduct, IRequest_Get, IRequest_Post, IService, IServiceType } from "./Models/models";

export const DOMAIN = "http://localhost:1337"



export async function loginAdmin(data:{identifier:string, password:string}){
    return await axios.post<{jwt:string}>(DOMAIN + "/api/auth/local", {...data})
}

export async function getOurWorks(){
    return await axios.get<{data:IOurWork[]}>(DOMAIN + "/api/our-works?populate=*")
}

export async function getProducts(){
    return await axios.get<{data:IProduct[]}>(DOMAIN + "/api/products?populate=*")
}

export async function getServices(){
    return await axios.get<{data:IService[]}>(DOMAIN + '/api/services?pagination[page]=1&pagination[pageSize]=100&populate=*&fields[0]=Title&fields[1]=Desc&fields[2]=Price')
}

export async function getServiceTypes(){
    return await axios.get<{data:IServiceType[]}>(DOMAIN + '/api/service-types?pagination[page]=1&pagination[pageSize]=100')
}

export async function getRequests(add_params?:string) {
    let jwtToken = document.cookie.replace(/(?:(?:^|.*;\s*)hope_shop_jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    return await axios.get(DOMAIN + '/api/requests?populate=*&' + add_params, {
        headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
    })
}

export async function postRequest(data:IRequest_Post) {
    return await axios.post(DOMAIN + '/api/requests', {...data})
}


// getProducts()
// .then((res)=>{
//     console.log(res);
// })