module.exports = {
  name: 'mods',
  description: 'Tag all moderators for help',
  category: 'Support',
  execute: async ({ sock, from, config }) => {
    const mods = config.MODS
    if (!mods || mods.length === 0) {
      return await sock.sendMessage(from, {
        text: '❌ *No moderators are currently assigned.*'
      })
    }

    // Build message text with mentions
    let text = '👑 *BLUEBOT-X SUPPORT TEAM* 👑\n'
    text += '──────────────────────\n'
    text += 'Need help? Here are our moderators:\n\n'

    // Create mentions
    const mentions = mods.map(mod => mod + '@s.whatsapp.net')
    mods.forEach((mod, i) => {
      text += `✨ ${i + 1}. @${mod}\n`
    })

    text += '\n>💡 *Tip:* Always describe your issue clearly.\n'
    text += '──────────────────────\n'
    text += `*${config.BOT_NAME}* at your service!`

    // Send message with mentions
    await sock.sendMessage(from, { text, mentions })
  }
} 
