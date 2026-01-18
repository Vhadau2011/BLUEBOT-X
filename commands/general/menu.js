import config from '../../config.js';
import { getCommandsByCategory, getAllCategories } from '../../lib/loader.js';

/**
 * Menu Command
 * Category: General
 * Developer: mudau_t
 */

export default {
  name: 'menu',
  aliases: ['help', 'commands'],
  category: 'general',
  description: 'Display all available commands',
  usage: '.menu [category]',
  
  async execute({ sock, msg, from, args, reply }) {
    const categories = getAllCategories();
    const categoryNames = {
      group: '👥 Group Commands',
      general: '📋 General Commands',
      admin: '⚡ Admin Commands',
      owner: '👑 Owner Commands',
      mods: '🛡️ Moderator Commands',
      fun: '🎮 Fun Commands',
      dev: '💻 Developer Commands'
    };

    const categoryCount = {
      group: 0,
      general: 0,
      admin: 0,
      owner: 0,
      mods: 0,
      fun: 0,
      dev: 0
    };

    // Count commands per category
    for (const [name, cmd] of global.commands.entries()) {
      if (cmd.name === name) {
        categoryCount[cmd.category]++;
      }
    }

    if (args.length > 0) {
      // Show specific category
      const category = args[0].toLowerCase();
      if (!categories.includes(category)) {
        return await reply(`❌ Invalid category! Use: ${categories.join(', ')}`);
      }

      const commands = getCommandsByCategory(category);
      if (commands.length === 0) {
        return await reply(`No commands found in ${category} category.`);
      }

      let text = `╔════════════════════════╗\n`;
      text += `║  ${categoryNames[category]}  \n`;
      text += `╚════════════════════════╝\n\n`;

      for (const cmd of commands) {
        text += `┌ *${config.PREFIX}${cmd.name}*\n`;
        text += `│ ${cmd.description}\n`;
        text += `└ Usage: ${cmd.usage}\n\n`;
      }

      text += `\n_Total: ${commands.length} commands_`;
      text += `\n\n*BLUEBOT-X v${config.VERSION}*`;
      text += `\n_Developer: ${config.DEVELOPER}_`;

      return await reply(text);
    }

    // Show all categories
    let text = `╔═══════════════════════════════╗\n`;
    text += `║     BLUEBOT-X COMMAND MENU    ║\n`;
    text += `╚═══════════════════════════════╝\n\n`;
    text += `👋 Hello! I'm *${config.BOT_NAME}*\n`;
    text += `Prefix: *${config.PREFIX}*\n\n`;

    text += `┌─────────────────────────\n`;
    for (const category of categories) {
      text += `│ ${categoryNames[category]}: *${categoryCount[category]}*\n`;
    }
    text += `└─────────────────────────\n\n`;

    text += `📖 *Usage:*\n`;
    text += `• ${config.PREFIX}menu [category] - View category commands\n`;
    text += `• ${config.PREFIX}menu general - General commands\n`;
    text += `• ${config.PREFIX}menu group - Group commands\n\n`;

    text += `*Categories:*\n`;
    text += `${categories.join(', ')}\n\n`;

    const totalCommands = Object.values(categoryCount).reduce((a, b) => a + b, 0);
    text += `_Total Commands: ${totalCommands}_\n\n`;

    text += `*BLUEBOT-X v${config.VERSION}*\n`;
    text += `_Developer: ${config.DEVELOPER}_\n`;
    text += `_⚠️ Modification Not Allowed_`;

    await reply(text);
  }
};
