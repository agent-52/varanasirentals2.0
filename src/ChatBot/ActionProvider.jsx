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

   greet = () =>{
    const message = this.createChatBotMessage("Hello friend, How can i help you today. ")
    this.addMessageToState(message)
   }

   addMessageToState = (message) =>{
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
   }

   handleCarRental = () =>{
    const message = this.createChatBotMessage(
      "Great, We offer these cars on rent :",
      {
        widget: "carButtons"
      }
      
    )
    this.addMessageToState(message)
   }

 }
 
 export default ActionProvider;