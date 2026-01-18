import { Boom } from '@hapi/boom';
import { DisconnectReason } from '@whiskeysockets/baileys';
import chalk from 'chalk';
import config from './config.js';
import AuthHandler from './lib/auth.js';
import MessageHandler from './lib/message.js';
import { loadCommands } from './lib/loader.js';

/**
 * BLUEBOT-X - Advanced WhatsApp Bot
 * Version: 2.0.0
 * Developer: mudau_t
 * 
 * ⚠️ MODIFICATION IS STRICTLY PROHIBITED ⚠️
 * 
 * This bot is protected under a custom license.
 * Any unauthorized modification, redistribution, or
 * removal of credits is strictly forbidden.
 */

console.clear();
console.log(chalk.cyan(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ██████╗ ██╗     ██╗   ██╗███████╗██████╗  ██████╗ ████████╗   ║
║   ██╔══██╗██║     ██║   ██║██╔════╝██╔══██╗██╔═══██╗╚══██╔══╝   ║
║   ██████╔╝██║     ██║   ██║█████╗  ██████╔╝██║   ██║   ██║      ║
║   ██╔══██╗██║     ██║   ██║██╔══╝  ██╔══██╗██║   ██║   ██║      ║
║   ██████╔╝███████╗╚██████╔╝███████╗██████╔╝╚██████╔╝   ██║      ║
║   ╚═════╝ ╚══════╝ ╚═════╝ ╚══════╝╚═════╝  ╚═════╝    ╚═╝      ║
║                                                           ║
║                    BLUEBOT-X v2.0.0                      ║
║                  Developer: mudau_t                      ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`));

console.log(chalk.yellow('⚠️  MODIFICATION IS STRICTLY PROHIBITED ⚠️\n'));
console.log(chalk.green('Starting BLUEBOT-X...\n'));

// Global variables
global.config = config;
global.commands = new Map();
global.mods = config.MOD_NUMBERS || [];
global.admins = config.ADMIN_NUMBERS || [];

// Load all commands
console.log(chalk.blue('📦 Loading commands...'));
await loadCommands();
console.log(chalk.green(`✓ Loaded ${global.commands.size} commands\n`));

// Start bot
async function startBot() {
  const authHandler = new AuthHandler();
  
  try {
    const sock = await authHandler.connect();
    const messageHandler = new MessageHandler(sock);

    // Connection update handler
    sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect } = update;

      if (connection === 'close') {
        const shouldReconnect = 
          lastDisconnect?.error instanceof Boom &&
          lastDisconnect.error.output?.statusCode !== DisconnectReason.loggedOut;

        console.log(
          chalk.red('Connection closed due to'),
          lastDisconnect?.error,
          chalk.yellow('Reconnecting:'),
          shouldReconnect
        );

        if (shouldReconnect) {
          setTimeout(() => startBot(), 3000);
        }
      } else if (connection === 'open') {
        console.log(chalk.green('\n✓ Connected to WhatsApp successfully!\n'));
        console.log(chalk.cyan('═══════════════════════════════════════'));
        console.log(chalk.cyan('Bot Information:'));
        console.log(chalk.cyan('═══════════════════════════════════════'));
        console.log(chalk.white(`Bot Name: ${config.BOT_NAME}`));
        console.log(chalk.white(`Prefix: ${config.PREFIX}`));
        console.log(chalk.white(`Mode: ${config.MODE}`));
        console.log(chalk.white(`Commands: ${global.commands.size}`));
        console.log(chalk.white(`Developer: ${config.DEVELOPER}`));
        console.log(chalk.cyan('═══════════════════════════════════════\n'));
        console.log(chalk.green('✓ BLUEBOT-X is now running!\n'));
      }
    });

    // Message handler
    sock.ev.on('messages.upsert', async ({ messages }) => {
      await messageHandler.handle(messages);
    });

    // Group update handler
    sock.ev.on('group-participants.update', async (update) => {
      await messageHandler.handleGroupUpdate(update);
    });

  } catch (error) {
    console.error(chalk.red('Error starting bot:'), error);
    setTimeout(() => startBot(), 5000);
  }
}

// Handle process errors
process.on('unhandledRejection', (error) => {
  console.error(chalk.red('Unhandled Rejection:'), error);
});

process.on('uncaughtException', (error) => {
  console.error(chalk.red('Uncaught Exception:'), error);
});

// Start the bot
startBot();
