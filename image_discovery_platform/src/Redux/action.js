import {GETDATA_FAILURE,GETDATA_REQUEST,GETDATA_SUCCESS,
    SEARCHDATA_FAILURE,SEARCHDATA_REQUEST,
    SEARCHDATA_SUCCESS} from "./actiontype"
    import axios from "axios"
    
    export const getDataRequest = () => {
    
    return {
        type:GETDATA_REQUEST
    }
    }
    export const getDataSuccess = (payload) => {
    
        return {
            type:GETDATA_SUCCESS,
            payload
        }
        }
        
        export const getDataFailure = (error) => {
            return {
                type:GETDATA_FAILURE,
                payload:error
            }
            }
            export const getData=()=> dispatch=>{
                dispatch(getDataRequest())
                return axios.get("https://api.unsplash.com/search/photos?per_page=30&query=${search}&client_id=xRf-SuV5UAdpxw3s_YdLrGyYyn7IaUW8Q1UebZLhtyA")

                .then((res)=>{
                console.log("get=",res.data)  
                dispatch(getDataSuccess(res.data))
                    })
                    .catch((err)=>{
                        dispatch(getDataFailure(err))
                    })
    
            }
            
    export const searchDataRequest = () => {
    
        return {
            type:SEARCHDATA_REQUEST,
        }
        }
    
        export const searchDataSuccess = (payload) => {
    
            return {
                type:SEARCHDATA_SUCCESS,
                payload
            }
            }
            export const searchDataFailure = (err) => {
    
                return {
                    type:SEARCHDATA_FAILURE,
                    payload:err
                }
                }
    
                export const searchData=(payload)=> dispatch=>{
                dispatch (searchDataRequest()) 
                // https://api.unsplash.com/search/photos?per_page=30&query=${search}&client_id=xRf-SuV5UAdpxw3s_YdLrGyYyn7IaUW8Q1UebZLhtyA
               
                return axios.get(`https://api.unsplash.com/search/photos?per_page=30&query=${payload}&client_id=xRf-SuV5UAdpxw3s_YdLrGyYyn7IaUW8Q1UebZLhtyA`)

                .then((res)=>{
                console.log(res.data)
                dispatch(searchDataSuccess(res.data))
                    })
                    .catch((err)=>{
                        dispatch(searchDataFailure(err))
                    })  
                }
    
  