module.exports = {
  name: 'menu',
  description: 'Show all commands grouped by category',
  category: 'General', // This command itself belongs to General
  execute: async ({ sock, from, commands, config }) => {
    // Group commands by category
    const categories = {}

    commands.forEach(cmd => {
      const cat = cmd.category || 'Other'
      if (!categories[cat]) categories[cat] = []
      categories[cat].push(cmd)
    })

    // Build menu text
    let text = `🤖 *${config.BOT_NAME}*\n👑 Owner: ${config.OWNER_NAME}\n\n`

    for (const [cat, cmds] of Object.entries(categories)) {
      text += `📂 *${cat}*\n`
      cmds.forEach(c => {
        text += `• ${config.PREFIX}${c.name} - ${c.description}\n`
      })
      text += `\n`
    }

    // Send menu
    await sock.sendMessage(from, { text })
  }
}
