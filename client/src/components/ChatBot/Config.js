// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Stackbot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName} your assistant, Enter 'help' to proceed`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#ec5e06',
    },
    chatButton: {
      backgroundColor: '#ec5e06',
    },
  },
};

export default config;