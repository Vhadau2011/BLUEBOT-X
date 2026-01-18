/**
 * Ping Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'ping',
  aliases: ['speed', 'latency'],
  category: 'general',
  description: 'Check bot response time',
  usage: '.ping',
  
  async execute({ reply }) {
    const start = Date.now();
    await reply('Pinging...');
    const end = Date.now();
    const ping = end - start;
    
    await reply(`🏓 *Pong!*\n\n⚡ Response Time: *${ping}ms*`);
  }
};
