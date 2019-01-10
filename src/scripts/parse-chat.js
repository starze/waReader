const whatsappParser = require('whatsapp-chat-parser-alt');

export function getParsedChatObject(fileContents) {
  return whatsappParser
  .parseString(fileContents)
  .then(messages => {
    console.log(messages)
    // Do whatever you want with messages
  })
  .catch(err => {
    // Something went wrong
  });
}