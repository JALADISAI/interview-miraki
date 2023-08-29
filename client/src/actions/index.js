import { 
    GET_LOG_IN_DETAILS, 
    HANDLE_EDIT,
    HANDLE_DELETE,
    HANDLE_MARKAS_COMPLETE, 
    GET_TASK_LIST } from "../types"

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

export const handleDelete = (data) => {
    return {
        type: HANDLE_DELETE,
        data
    }
}

export const handleMarkAsComplete = (data) => {
    return {
        type: HANDLE_MARKAS_COMPLETE,
        data
    }
}
export const getTaskList = data => {
    return {
        type: GET_TASK_LIST,
        data
    }
}
