import React, {useState, createContext} from "react";

export const Context = createContext();

export const ContextProvider = ({children}) =>{
    const [username, setUsername] = useState("")
    const [secret, setPassword] = useState("")
    const [isLogin, setIslogin] = useState(false)

    const values = {
        username, setUsername,
        secret, setPassword,
        isLogin, setIslogin
    }
    return <Context.Provider value={values}>{children}</Context.Provider>
};