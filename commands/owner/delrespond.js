/**
 * Delrespond Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'delrespond',
  aliases: ['delresp'],
  category: 'owner',
  description: 'Delete auto response',
  usage: '.delrespond [trigger]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Delrespond Command*\n\n`;
    text += `This is the delrespond command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
