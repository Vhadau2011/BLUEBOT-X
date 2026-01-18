import config from '../../config.js';

/**
 * Mods Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'mods',
  aliases: ['moderators', 'modlist'],
  category: 'general',
  description: 'Display list of bot moderators',
  usage: '.mods',
  
  async execute({ reply }) {
    const mods = global.mods || [];
    
    let text = `╔════════════════════════╗\n`;
    text += `║  🛡️ BOT MODERATORS  ║\n`;
    text += `╚════════════════════════╝\n\n`;

    if (mods.length === 0) {
      text += `No moderators assigned yet.\n\n`;
      text += `Contact owner to become a moderator!`;
    } else {
      text += `*Total Moderators: ${mods.length}*\n\n`;
      
      for (let i = 0; i < mods.length; i++) {
        text += `${i + 1}. @${mods[i]}\n`;
      }
      
      text += `\n_These users have moderator privileges_`;
    }

    text += `\n\n*BLUEBOT-X*`;
    text += `\n_Developer: ${config.DEVELOPER}_`;

    await reply(text);
  }
};
