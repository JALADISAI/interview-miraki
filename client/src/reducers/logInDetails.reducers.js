import { isLogin } from "../helpers";
import { GET_LOG_IN_DETAILS }from "../types/index";


const initialState = {
}

export default function LogIn (state =  initialState,action) {
    switch(action.type){
        case GET_LOG_IN_DETAILS :{
            return {
                ...action.data,
                isLogin: isLogin()
            }

        }
        default:
            return state
    }

}