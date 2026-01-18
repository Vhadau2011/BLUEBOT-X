import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * BLUEBOT-X Command Loader
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */

export async function loadCommands() {
  const commandsPath = path.join(__dirname, '..', 'commands');
  const categories = ['group', 'general', 'admin', 'owner', 'mods', 'fun', 'dev'];

  for (const category of categories) {
    const categoryPath = path.join(commandsPath, category);
    
    if (!fs.existsSync(categoryPath)) {
      console.log(chalk.yellow(`⚠️  Category folder not found: ${category}`));
      continue;
    }

    const files = fs.readdirSync(categoryPath).filter(file => file.endsWith('.js'));

    for (const file of files) {
      try {
        const filePath = path.join(categoryPath, file);
        const command = await import(`file://${filePath}`);
        
        if (command.default && command.default.name) {
          global.commands.set(command.default.name, command.default);
          
          // Also register aliases if any
          if (command.default.aliases && Array.isArray(command.default.aliases)) {
            for (const alias of command.default.aliases) {
              global.commands.set(alias, command.default);
            }
          }
        }
      } catch (error) {
        console.error(chalk.red(`Error loading ${category}/${file}:`), error.message);
      }
    }
  }
}

export function getCommandsByCategory(category) {
  const commands = [];
  for (const [name, cmd] of global.commands.entries()) {
    if (cmd.category === category && cmd.name === name) {
      commands.push(cmd);
    }
  }
  return commands;
}

export function getAllCategories() {
  return ['group', 'general', 'admin', 'owner', 'mods', 'fun', 'dev'];
}
