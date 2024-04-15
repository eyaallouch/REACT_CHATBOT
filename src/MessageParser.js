// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(this.state)
      console.log(message)
      if (message.toLowerCase().includes("hello word"))
      {
        this.actionProvider.helloWordHandler()
      }
    }
  }
  
  export default MessageParser;