import React,{useEffect, useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../apis";
import { getCookie, setCookie } from "../helpers";
import { saveLogInDetails } from "../actions";
import TaskList from "./tasks/List";

function LogIn () {
    const [name,setName] = useState('');
    const [Password,setPassword] = useState('');
    const [isValid,setIsValid] = useState (true);
    const dispatch = useDispatch()

    const isLogin = useSelector((State)=>State?.logInDetails?.isLogin, false);

    const nameDetails = (event) => {
        setName(event?.target?.value);
        validation();
    }
    const PasswordDetails = (event) => {
        setPassword(event?.target?.value)
        validation();
    }
    const validation = () => {
        if(name && Password){
            setIsValid(false)
        }
    }
    const saveDetails = async () => {
        const data = await getUserInfo({userName: name, password: Password});
        setCookie(data);
        dispatch(saveLogInDetails(data))
    }
    useEffect(() => {
        const data = getCookie();
        dispatch(saveLogInDetails(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
              {!isLogin &&<div>
                  <div>
                      userName
                      <input onChange={nameDetails} type ="text"/>
                  </div>
                  <div>
                      Password
                      <input onChange={PasswordDetails} type = "password"/>
                  </div>
                  <button onClick={saveDetails} disabled={isValid} >Create/Login</button>
                  
              </div>}
             {isLogin &&<TaskList/>}
          </div>
    )
}
export default LogIn;