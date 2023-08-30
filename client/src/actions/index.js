import { 
    GET_LOG_IN_DETAILS, 
    HANDLE_EDIT,
    GET_TASK_LIST,
    HANDLE_ACTION_SAVE,
    CREATE_TASK
} from "../types"

export const saveLogInDetails = ( data) => {
    return {
        type:GET_LOG_IN_DETAILS,
        data
    }
}

export const handleEdit = (data) => {
    return {
        type: HANDLE_EDIT,
        data
    }
}
export const getTaskList = data => {
    return {
        type: GET_TASK_LIST,
        data
    }
}
export const saveUserAction = data => {
    return {
        type: HANDLE_ACTION_SAVE,
        data
    }
}

export const createTask = data => {
    return {
        type : CREATE_TASK,
        data
    }
}
