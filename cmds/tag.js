module.exports = {
  name: 'tag',
  description: 'Tag all group members (admin only)',
  category: 'Admin',
  execute: async ({ sock, from, msg, isOwner, isMod }) => {
    // Check if sender is owner or mod
    if (!isOwner && !isMod) {
      return await sock.sendMessage(from, {
        text: '❌ Only owner or moderators can use this command.'
      })
    }

    // Only works in groups
    if (!from.endsWith('@g.us')) {
      return await sock.sendMessage(from, {
        text: '❌ This command only works in groups.'
      })
    }

    // Get all participants
    const groupMetadata = await sock.groupMetadata(from)
    const members = groupMetadata.participants.map(p => p.id)

    // Build message text
    let text = '📢 *Attention everyone!*\n──────────────────────\n'
    text += 'This is an important announcement from the admins.\n\n'
    members.forEach((m, i) => {
      text += `✨ @${m.split('@')[0]} `
      if ((i + 1) % 5 === 0) text += '\n' // line break every 5 mentions
    })
    text += '\n──────────────────────\n⚡ Stay active and enjoy the group!'

    // Send message with mentions
    await sock.sendMessage(from, { text, mentions: members })
  }
} 
