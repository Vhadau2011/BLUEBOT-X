module.exports = {
  name: 'ping',             // command name
  description: 'Check bot status', // description for menu
  category: 'General',       // <-- NEW: category
  execute: async ({ sock, from }) => {
    await sock.sendMessage(from, { text: '🏓 Pong!' })
  }
} 
