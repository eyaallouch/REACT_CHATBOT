// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }
 
 helloWordHandler = () => 
 {
  const message=this.createChatBotMessage("Hello, How can I help you ? :) ")
  this.setChatbotMessage(message)
 }
 setChatbotMessage = (message) =>
 {
     this.setState(state => ({...state,messages: [...state.messages,message]}))
 }
}
 export default ActionProvider;