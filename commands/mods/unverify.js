/**
 * Unverify Command
 * Category: Mods
 * Developer: mudau_t
 */

export default {
  name: 'unverify',
  aliases: ['unverifyuser'],
  category: 'mods',
  description: 'Unverify user',
  usage: '.unverify [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    let text = `✅ *Unverify Command*\n\n`;
    text += `This is the unverify command in the mods category.\n\n`;
    text += `_Command is working correctly!_`;
    await reply(text);
  }
};
