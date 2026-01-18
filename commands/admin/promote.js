/**
 * Promote Command
 * Category: Admin
 * Developer: mudau_t
 */

export default {
  name: 'promote',
  aliases: ['makeadmin'],
  category: 'admin',
  description: 'Promote to admin',
  usage: '.promote [@user]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    if (!isGroup) return await reply('❌ This command is only for groups!');
    if (!isGroupAdmin && !isOwner) return await reply('❌ Only group admins can use this!');
    if (!isBotGroupAdmin) return await reply('❌ I need to be admin to do this!');
    
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    if (!mentioned || mentioned.length === 0) {
      return await reply('❌ Please mention a user to promote!');
    }
    
    await sock.groupParticipantsUpdate(from, mentioned, 'promote');
    await reply('✅ User has been promoted to admin!');
  }
};
