import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {MainContainer,ChatContainer,MessageList,Message,MessageInput,TypingIndicator } from "@chatscope/chat-ui-kit-react"
const API_KEY = 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;
function App() {
  const [typing,setTyping] = useState(false);
  const [messages, setMessages] = useState(
    [
      {
        message : "Hello, I am ChatGPT!",
        sender : "ChatGPT"
      }
    ]
  )

  const handleSend = async (message) =>{
      const newMessage = {
        message : message,
        sender  : "user",
        direction : "outgoing"
      }
  const newMessages = [...messages,newMessage];
  setMessages(newMessages);
 setTyping(true);
  //typing indicator
  await processMessageToChatGPT(newMessages);

  }

  async function processMessageToChatGPT(chatMessages){
        let apiMessage = chatMessages.map((messageObject)=>{
          let role = "";
          if(messageObject.sender === "ChatGPT"){
            role = "assis"
          }
        })
  }
  return (
    <div className="App">
      <div style={{position:"relative",height:"800px",width:"700px"}}>
          <MainContainer>
              <ChatContainer>
                  <MessageList typingIndicator={typing?<TypingIndicator content="ChatGpt is typing"/> : null}>
                      {messages.map((message,i)=>{
                          return <Message key={i} model={message}/>
                      })}
                  </MessageList>
                  <MessageInput placeholder='Type message here' onSend={handleSend} />
              </ChatContainer>
          </MainContainer>
      </div>
      
    </div>
  )
}

export default App
