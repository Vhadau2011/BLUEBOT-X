/**
 * Broadcast Command
 * Category: Owner
 * Developer: mudau_t
 */

export default {
  name: 'broadcast',
  aliases: ['bc'],
  category: 'owner',
  description: 'Broadcast message',
  usage: '.broadcast [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Broadcast Command*\n\n`;
    text += `This is the broadcast command in the owner category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
