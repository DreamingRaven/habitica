//export const SPAM_ADMIN_LEVEL = 4;
//10 second gap for spam
//export const SPAM_TIMER = 10000;
//export const SPAM_MESSAGE_LIMIT = 1;

schema.methods.isSpam = function (user) {

  // var SPAM_ADMIN_LEVBL = 4;
  // var SPAM_TIMER = 10000;
  // var SPAM_MESSAGE_LIMIT = 1;
  // if (this._id !== TAVERN_ID) {
  //   return false;
  // }
  // else if (user.contributor && user.contributor.level >= SPAM_USER_LEVEL {
  //   retutn false;
  // }
  //
  // let time = Date.Now();
  // let messages = 0;
  //
  // for (let i = 0; i < this.chat.length; i++)) {
  //   let currentMessage = this.chat[i];
  //   if (currentMessage.uuid === user._id && time - currentMessage.timestamp <= SPAM_TIMER) {
  //     if (messages >= SPAM_LIMIT) {
  //       return true;
  //     }
  //     messages++;
  //   } else if (time - currentMessage.timestamp > SPAM_TIMER) {
  //     return false;
  //   }
  // }
  return false;
};
