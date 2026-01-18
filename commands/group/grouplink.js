/**
 * Grouplink Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'grouplink',
  aliases: ['gclink'],
  category: 'group',
  description: 'Get group link',
  usage: '.grouplink',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    if (!isGroup) return await reply('❌ This command is only for groups!');
    if (!isBotGroupAdmin) return await reply('❌ I need to be admin to do this!');
    
    const code = await sock.groupInviteCode(from);
    await reply(`🔗 *Group Link:*\n\nhttps://chat.whatsapp.com/${code}`);
  }
};
