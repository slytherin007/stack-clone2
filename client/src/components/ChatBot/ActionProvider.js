// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you!!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const introduction = () => {
    const botMessage = createChatBotMessage(`I' m Stackbot your assistant, I will help you with your queries`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleOtp = () => {
    const msg = "Enter your valid mobile number to receive an OTP"
    const botMessage = createChatBotMessage(msg);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleAuth = () => {
    handleOtp()
    var msg = "You must have account to post or vote an question. 1) Click Login on top bar    2) Create account or login your account"
    const botMessage = createChatBotMessage(msg);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleHelp = () => {
    const msg = "Enter these keywords - login, auth, otp, hello, questions"
    const botMessage = createChatBotMessage(msg);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleQue = () => {
    const msg = "You can ask questions by clicking Ask Question button. Enter your question title, body and don't forget to enter tags"
    const botMessage = createChatBotMessage(msg);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  
  const handleWork = () => {
    const msg = "I m your bot, I can help you with your queries. I can tell you how to use this application. Just type 'help'"
    const botMessage = createChatBotMessage(msg);
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleBye = () => {
    const msg = "It was nice talking to you, Bye"
    const botMessage = createChatBotMessage(msg);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));  
  }

  const handleSearch = (term) => {
    const botMessage = createChatBotMessage(term);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));  
  }

  const handleNeedMore = () => {
    const botMessage = createChatBotMessage("Sorry I'm unable to understand");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));  
  }
  
  const handleHow = () => {
    const botMessage = createChatBotMessage(`I'm fine, Thanks for asking`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));  
  }
  
  const handleTell = () => {
    const botMessage = createChatBotMessage(`You can type 'help' to see what I can do for you`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));  
  }
  
  const handleName = () => {
    const botMessage = createChatBotMessage(`You can call me Stack`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));  
  }

  const handleBday = () => {
    const botMessage = createChatBotMessage(`Thank you Dear`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));  
  }
  const handleGree = (time) => {
    var botMessage;
    if(time === 'M'){
      botMessage = createChatBotMessage("Good Morning")
    }else if(time === 'A'){
      botMessage = createChatBotMessage("Good Afternoon")
    }else if(time === 'E'){
      botMessage = createChatBotMessage("Good Evening")
    }else{
      botMessage = createChatBotMessage("Good Night")
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));  
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            introduction,
            handleAuth,
            handleHelp,
            handleQue,
            handleOtp,
            handleBye,
            handleSearch,
            handleWork,
            handleHow,
            handleGree,
            handleTell,
            handleName,
            handleBday,
            handleNeedMore
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;