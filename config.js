import dotenv from 'dotenv';
dotenv.config();

// BLUEBOT-X Configuration File
// Developer: mudau_t
// Modification: NOT ALLOWED

const config = {
  // Bot Settings
  BOT_NAME: process.env.BOT_NAME || 'BLUEBOT-X',
  PREFIX: process.env.PREFIX || '.',
  OWNER_NUMBER: process.env.OWNER_NUMBER || '27747815326',
  OWNER_NAME: process.env.OWNER_NAME || 'mudau_t',
  
  // Session Configuration
  SESSION_ID: process.env.SESSION_ID || '', // Leave empty to generate new session
  USE_CONFIG: process.env.USE_CONFIG === 'true' || false, // Set to true to use config.js, false for .env
  
  // Bot Mode
  MODE: process.env.MODE || 'public', // public or private
  AUTO_READ: process.env.AUTO_READ === 'true' || false,
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ === 'true' || false,
  AUTO_TYPING: process.env.AUTO_TYPING === 'true' || false,
  AUTO_RECORDING: process.env.AUTO_RECORDING === 'true' || false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === 'true' || true,
  
  // Group Settings
  ANTI_LINK: process.env.ANTI_LINK === 'true' || false,
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD === 'true' || false,
  WELCOME_MSG: process.env.WELCOME_MSG === 'true' || true,
  GOODBYE_MSG: process.env.GOODBYE_MSG === 'true' || true,
  
  // Admin & Moderator Numbers (comma separated)
  ADMIN_NUMBERS: process.env.ADMIN_NUMBERS?.split(',') || [],
  MOD_NUMBERS: process.env.MOD_NUMBERS?.split(',') || [],
  
  // API Keys (Optional)
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || '',
  
  // Database
  DATABASE_URL: process.env.DATABASE_URL || '',
  
  // Time Zone
  TIMEZONE: process.env.TIMEZONE || 'Africa/Johannesburg',
  
  // Developer Info (DO NOT MODIFY)
  DEVELOPER: 'mudau_t',
  VERSION: '2.0.0',
  REPOSITORY: 'https://github.com/mudau_t/BLUEBOT-X',
  
  // Pairing Mode
  USE_PAIRING_CODE: process.env.USE_PAIRING_CODE === 'true' || true,
  PAIRING_NUMBER: process.env.PAIRING_NUMBER || '',
};

export default config;
