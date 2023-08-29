import { GET_TASK_LIST } from "../types"

const initialState = {
    list: []
}

export default function taskList (state =  initialState,action) {
    switch(action.type){
        case GET_TASK_LIST :{
            return {
                list: action.data,
            }

        }
        default:
            return state
    }

}