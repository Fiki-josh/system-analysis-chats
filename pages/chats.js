import React, {useState, useEffect, useContext} from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

import dynamic from "next/dynamic"

const ChatEngine = dynamic(() => 
  import("react-chat-engine").then((module) => module.ChatEngine)
)
const MessageFormSocial = dynamic(() => 
  import("react-chat-engine").then((module) => module.MessageFormSocial)
)

export default function Chats() {
  const router = useRouter()
  const {username, secret,setIslogin,isLogin} = useContext(Context)
  const [showchat,setShowchat] = useState(false)

  useEffect(() => {
    if(typeof Document !==null){
      setShowchat(true)
    }
  })
  useEffect(() => {
    if(!isLogin) router.push("/")
  })

  if(!showchat) return <div></div>
  
  function logout() {
    setIslogin(false)
  }
  return (
    <div >
      <div >
        <button className="logout-button"
          onClick={logout}
        >
          Logout
        </button>
        <div className="clear"></div>
        <ChatEngine 
          height="90vh"
          projectID='6fb83090-9443-4562-bd54-7ce8b689aac8'
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial/>}
        />
      </div>
    </div>
  );
}
