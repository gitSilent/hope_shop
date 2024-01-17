// Интерфейс для объекта работ ателье
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

// Интерфейс для объекта товара ателье
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

// Интерфейс для объекта типа услуги ателье
export interface IServiceType{
    id: number,
    attributes: {
        Title: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string
    }
}

// Интерфейс для объекта услуги ателье
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

// Интерфейс для объекта полученной заявки 
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

// Интерфейс для объекта отправленной заявки 
export interface IRequest_Post{
    data:{
        Name: string,
        services: number[],
        Phone: string,
        Desc: string
    }
}

// Интерфейс для объекта фотографии
export interface IPhoto{
    id: number,
    attributes:{
        name: string,
        width: number,
        height: number,
        url: string
    }
}