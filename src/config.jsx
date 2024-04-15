// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import bootAvatar from "../public/chatbot.png";
import './components/BotAvatar/BotAvatar.css'
const botName = 'Rec-Inov Bot';
const config = {



   initialMessages: [createChatBotMessage(`Hi I'm ${botName}`)],
  botName: botName,
 
   customStyles: {
    botMessageBox: {
      backgroundColor:  '#4DB9D1',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  customComponents: {
    botAvatar: (props) => (
      <div className="chat-bot-avatar"><img src={bootAvatar}/></div>
    )
  }
   }
  /* function config() {
    return (

      
            <Test />
      
    ); */
//}
export default config