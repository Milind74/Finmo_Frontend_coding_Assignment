//action describing what type of action it is

import {
    GETDATA_FAILURE,
    GETDATA_REQUEST,
    GETDATA_SUCCESS,
    SEARCHDATA_FAILURE,
    SEARCHDATA_REQUEST,
    SEARCHDATA_SUCCESS
} from "./actiontype"
import axios from "axios"

//action describing requestdata
export const getDataRequest = () => {

    return {
        type: GETDATA_REQUEST
    }
}
// action describing successdata

export const getDataSuccess = (payload) => {

    return {
        type: GETDATA_SUCCESS,
        payload
    }
}
// action describing Failuredata
export const getDataFailure = (error) => {
    return {
        type: GETDATA_FAILURE,
        payload: error
    }
}
//using thunk to work between action and reducer
//using thunk we can delay the execution of our function

export const getData = () => dispatch => {
    //requesting for data from reducer
    dispatch(getDataRequest())
    return axios.get("https://api.unsplash.com/search/photos?per_page=40&query=${search}&client_id=xRf-SuV5UAdpxw3s_YdLrGyYyn7IaUW8Q1UebZLhtyA")

        .then((res) => {
            console.log("get=", res.data)
            //if we get result it will dispatch success request
            dispatch(getDataSuccess(res.data))
        })
        .catch((err) => {
                        //if we get failure it will dispatch failure request

            dispatch(getDataFailure(err))
        })

}

//action describing search requestdata

export const searchDataRequest = () => {

    return {
        type: SEARCHDATA_REQUEST,
    }
}
//action describing search successtdata

export const searchDataSuccess = (payload) => {

    return {
        type: SEARCHDATA_SUCCESS,
        payload
    }
}
 //action describing search failuree data

export const searchDataFailure = (err) => {

    return {
        type: SEARCHDATA_FAILURE,
        payload: err
    }
}

export const searchData = (payload) => dispatch => {
    dispatch(searchDataRequest())

    return axios.get(`https://api.unsplash.com/search/photos?per_page=30&query=${payload}&client_id=xRf-SuV5UAdpxw3s_YdLrGyYyn7IaUW8Q1UebZLhtyA`)

        .then((res) => {
            console.log(res.data)
            dispatch(searchDataSuccess(res.data))
        })
        .catch((err) => {
            dispatch(searchDataFailure(err))
        })
}