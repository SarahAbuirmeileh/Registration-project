export namespace NSUser{

    export interface IGetAll {
        page: string;
        pageSize: string;
    }

    export interface IUser{
        id: string
        name: string
        password: string
        createdAt: Date;
    }


}