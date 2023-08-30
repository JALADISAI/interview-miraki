import { GET_TASK_LIST, HANDLE_EDIT, HANDLE_ACTION_SAVE } from "../types"

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
        case HANDLE_EDIT: {
            return {
                actionTask: action.data
            }
        }
        case HANDLE_ACTION_SAVE: {
            return {
                ...state,
                [action.data.key]: action.data.value
            }
        }
        default:
            return state
    }

}