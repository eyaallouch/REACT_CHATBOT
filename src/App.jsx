import React, { useState } from 'react';
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "./MessageParser";
import ActionProvider from "./actionProvider";
import config from "./config";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import './App.css';
function App() {
  const [chatBotVisible, setChatBotVisible] = useState(false);
  const toggleChatBotVisibility = () => {
    setChatBotVisible(!chatBotVisible);
  };
  return (
    <>
      <button className="chatbot-toggle-button" onClick={toggleChatBotVisibility}>
        {chatBotVisible ? <i className="material-icons">close</i> : <i className="material-icons">chat</i>}
      </button>
      <div style={{ display: "flex", justifyContent: "center" }}>
      {chatBotVisible &&  <Chatbot
        className="chatbot-position"
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        
        />}
      </div>
  
    </>
  );
}

export default App;
