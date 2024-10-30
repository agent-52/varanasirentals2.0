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
   handleCrysta = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rent details of Innova Crysta"
    )
    const message2 = this.createChatBotMessage(
      `Airport Pick/Drop = ₹1500 ||  

      8Hr/80Km = ₹3000 ||  

      12Hr/120Km = ₹4000 || 
      Capacity = 6 + 1`, {
        widget: "crystaPackages"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }
   handleFortuner = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rent details of Fortuner"
    )
    const message2 = this.createChatBotMessage(
      `Airport Pick/Drop = ₹5000 || 
      8Hr/80Km = ₹8000 || 
      12Hr/120Km = ₹10500 ||
      Capacity = 6 + 1`, {
        widget: "fortunerPackages"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }
   handleHycross = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rent details of Hycross"
    )
    const message2 = this.createChatBotMessage(
      `Airport Pick/Drop = ₹2200 || 
      8Hr/80Km = ₹4500 || 
      12Hr/120Km = ₹6000 ||
      Capacity = 6 + 1`, {
        widget: "hycrossPackages"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }
   handleErtiga = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rent details of Ertiga"
    )
    const message2 = this.createChatBotMessage(
      `Airport Pick/Drop = ₹1150 || 
      8Hr/80Km = ₹2500 || 
      12Hr/120Km = ₹3000 ||
      Capacity = 6 + 1`, {
        widget: "ertigaPackages"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }
   handleKia = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rent details of Kia Carens"
    )
    const message2 = this.createChatBotMessage(
      `Airport Pick/Drop = ₹1150 || 
      8Hr/80Km = ₹2500 || 
      12Hr/120Km = ₹3000 ||
      Capacity = 6 + 1`, {
        widget: "kiaPackages"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }
   handleDzire = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rent details of Swift Dzire"
    )
    const message2 = this.createChatBotMessage(
      `Airport Pick/Drop = ₹900 || 
      8Hr/80Km = ₹2000 || 
      12Hr/120Km = ₹2500 ||
      Capacity = 4 + 1`, {
        widget: "dzirePackages"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }

   //tempo section

   handleTempoRental = () =>{
    const message = this.createChatBotMessage(
      "Great, We have a wide range of Tempo's for rent :",
      {
        widget: "tempoButtons"
      }
      
    )
    this.addMessageToState(message)
   }

   handle10Seater = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rental details of our 10-16 seater Tempo traveller"
    )
    const message2 = this.createChatBotMessage(
      `Airport Pick/Drop = ₹2500 ||
      8Hr/80Km = ₹5500 `, {
        widget: "10SPackages"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }
   handle17Seater = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rental details of our 17-20 seater Tempo traveller"
    )
    const message2 = this.createChatBotMessage(
      `Airport Pick/Drop = ₹3000 ||
      8Hr/80Km = ₹6500 `, {
        widget: "17SPackages"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }
   handle21Seater = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rental details of our 21-25 seater Tempo traveller"
    )
    const message2 = this.createChatBotMessage(
      `Airport Pick/Drop = ₹1150 ||
      8Hr/80Km = ₹7500 `, {
        widget: "21SPackages"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }
   handleUrbania = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rental details of our 9-16 seater Urbania"
    )
    const message2 = this.createChatBotMessage(
      `Airport Pick/Drop = ₹3000 ||
      8Hr/80Km = ₹6500 `, {
        widget: "urbaniaPackages"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }
   handleMaharaja = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rental details of our 9-14 seater Maharaja"
    )
    const message2 = this.createChatBotMessage(
      `Airport Pick/Drop = ₹3500 ||
      8Hr/80Km = ₹7500 `, {
        widget: "maharajaPackages"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }

   //premium section

   handlePremiumRental = () =>{
    const message = this.createChatBotMessage(
      "We offer the following premium cars on reservation basis:",
      {
        widget: "premiumButtons"
      }
      
    )
    this.addMessageToState(message)
   }


   // buses section

   handleBusRental = () =>{
    const message = this.createChatBotMessage(
      "We offer the following Buses on rental basis:",
      {
        widget: "busButtons"
      }
      
    )
    this.addMessageToState(message)
   }

   handleMiniBus = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rental details of our 30-35 seater Mini bus"
    )
    const message2 = this.createChatBotMessage(
      `1 Day/300Km = ₹9500`, {
        widget: "minibus"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }
   handle40Seater = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rental details of our 40 seater Bus"
    )
    const message2 = this.createChatBotMessage(
      `1 Day/300Km = ₹11000`, {
        widget: "40seaterbus"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }
   handle45Seater = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rental details of our 45 seater Bus"
    )
    const message2 = this.createChatBotMessage(
      `1 Day/300Km = ₹12500`, {
        widget: "45seaterbus"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }
   handle49Seater = () =>{

    const message1 = this.createChatBotMessage(
      "Here are the rental details of our 49 seater Bus"
    )
    const message2 = this.createChatBotMessage(
      `1 Day/300Km = ₹14500`, {
        widget: "49seaterbus"
      }
    )
    this.addMessageToState(message1)
    this.addMessageToState(message2)
   }


   


 }
 
 export default ActionProvider;