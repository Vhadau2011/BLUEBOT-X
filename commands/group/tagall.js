/**
 * Tagall Command
 * Category: Group
 * Developer: mudau_t
 */

export default {
  name: 'tagall',
  aliases: ['mentionall'],
  category: 'group',
  description: 'Tag all members',
  usage: '.tagall [message]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    if (!isGroup) return await reply('❌ This command is only for groups!');
    if (!isGroupAdmin && !isOwner) return await reply('❌ Only group admins can use this!');
    
    const groupMetadata = await sock.groupMetadata(from);
    const participants = groupMetadata.participants;
    const mentions = participants.map(p => p.id);
    const message = args.join(' ') || 'Attention everyone!';
    
    await sock.sendMessage(from, {
      text: `${message}\n\n` + mentions.map(m => `@${m.split('@')[0]}`).join('\n'),
      mentions: mentions
    });
  }
};
