export interface IProduct{
    ProductName: string,
    Description: string,
    Price: number,
    Image: string
}

export interface IService{
    attributes:{
        id: number,
        Name: string,
        content: string
    },
    id: number
}

export interface IServiceResponse{
    data: IService[]
}