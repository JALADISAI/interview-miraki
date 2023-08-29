import { combineReducers } from "@reduxjs/toolkit";
import logInDetails from "./logInDetails.reducers";
import taskList from './taskList.reducer'

export default combineReducers({
    logInDetails,
    taskList
})