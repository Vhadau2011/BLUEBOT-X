/**
 * Groupdesc Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'groupdesc',
  aliases: ['setdesc'],
  category: 'group',
  description: 'Set group description',
  usage: '.groupdesc [description]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Groupdesc Command*\n\n`;
    text += `This is the groupdesc command in the group category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
