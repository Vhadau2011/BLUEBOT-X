/**
 * Kick Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'kick',
  aliases: ['remove'],
  category: 'admin',
  description: 'Kick member',
  usage: '.kick [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    if (!isGroup) return await reply('❌ This command is only for groups!');
    if (!isGroupAdmin && !isOwner) return await reply('❌ Only group admins can use this!');
    if (!isBotGroupAdmin) return await reply('❌ I need to be admin to do this!');
    
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || mentioned.length === 0) {
      return await reply('❌ Please mention a user to kick!');
    }
    
    await sock.groupParticipantsUpdate(from, mentioned, 'remove');
    await reply('✅ User has been kicked!');
  }
};
