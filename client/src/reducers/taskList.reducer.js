import { CREATE_TASK, GET_TASK_LIST, HANDLE_ACTION_SAVE, HANDLE_EDIT } from "../types"

const initialState = {
    list: [],
    createTask: false
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

        case CREATE_TASK: {
            return {
                ...state,
                createTask:action.data

            }
        }
        default:
            return state
    }

}