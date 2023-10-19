import { AxiosResponse } from "axios";
export interface AxiosRespResults extends AxiosResponse<results>{}
export interface results{
    info:{
        page: number,
        results: number
    }
    results:{
        gender: string,
        city: string,
        name:{
            first: string,
            last: string
        },
        location:{ 
            country: string
        },
        picture:{
            medium: string
        }
    }
}


// export interface Result{
//     gender: 'male'  | 'female',
//     name:{
//         first: string,
//         last: string
//     },
//     location:{ 
//         country: string
//     },
//     picture:{
//         medium: string
//     }
// }

// export interface Back<T>{
//     data:[],
//     message?: string,
//     code: number
// }