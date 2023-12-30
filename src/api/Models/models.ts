export interface IOurWork{
    id: number,
    attributes: {
        Title?: string,
        createdAt: string,
        updatedAt: string,
        Photo:{
            data:IPhoto
        }
    }
}


export interface IProduct{
    id: number,
    attributes: {
        Title: string,
        Desc: string | null,
        Price: number,
        createdAt: string,
        updatedAt: string,
        Photos:{
            data: IPhoto[]
        }
    }
}

export interface IServiceType{
    id: number,
    attributes: {
        Title: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string
    }
}

export interface IService{
    id: number,
    attributes:{
        Title: string,
        Desc: string | null,
        Price: number,
        service_type:{
            data: IServiceType
        } 
    }
}

export interface IRequest_Get{
    id: number,
    attributes:{
        Name: string,
        Phone: string,
        Desc: string
        createdAt: string,
        updatedAt: string,
        services:{
            data:IService[]
        }
    }
}

export interface IRequest_Post{
    data:{
        Name: string,
        services: number[],
        Phone: string,
        Desc: string
    }
}

export interface IPhoto{
    id: number,
    attributes:{
        name: string,
        width: number,
        height: number,
        url: string
    }
}