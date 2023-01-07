import React, {useContext} from "react";

import { Context } from "../context";

import axios from "axios";

import { useRouter } from "next/router";

export default function Auth() {
  const {username,secret,setUsername, setPassword,setIslogin} = useContext(Context)
  const router = useRouter()
  function onSubmit(e){
    e.preventDefault()

    if(username.length == 0 || secret.length == 0) return

    axios.put(
      'https://api.chatengine.io/users/',
      {username,secret},
      {headers: {"Private-key": "9d224164-2d2d-4fe5-ba9b-716be2eff53c"}}

    )
    
    .then((r) => {
      setIslogin(true)
      router.push("/chats")
    })
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form  className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Stutorpal</div>
          <div className="input-container">
            <input type="text" 
              className="text-input"
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)} 
            />
            <input type="password" 
              className="text-input"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button
          type="submit"
          className="submit-button">
          Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
