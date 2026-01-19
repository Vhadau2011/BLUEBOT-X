import pkg from '@whiskeysockets/baileys';
const { 
  default: makeWASocket,
  DisconnectReason, 
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  Browsers
} = pkg;
import pino from 'pino';
import chalk from 'chalk';
import readline from 'readline';
import config from '../config.js';
import SessionManager from './session.js';

/**
 * BLUEBOT-X Authentication Handler
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (text) => new Promise((resolve) => rl.question(text, resolve));

class AuthHandler {
  constructor() {
    this.sessionManager = new SessionManager(config.SESSION_ID);
    this.sock = null;
  }

  /**
   * Check if session is configured
   */
  async checkSessionConfig() {
    console.log(chalk.blue('╔════════════════════════════════════════╗'));
    console.log(chalk.blue('║      BLUEBOT-X Session Manager        ║'));
    console.log(chalk.blue('║        Developer: mudau_t             ║'));
    console.log(chalk.blue('╚════════════════════════════════════════╝\n'));

    // Check if using config.js or .env
    const usingConfig = config.USE_CONFIG;
    const sessionId = config.SESSION_ID;

    console.log(chalk.yellow(`Configuration Source: ${usingConfig ? 'config.js' : '.env'}`));
    console.log(chalk.yellow(`Session ID: ${sessionId || 'Not Set'}\n`));

    if (!sessionId || sessionId === '') {
      console.log(chalk.red('⚠️  No SESSION_ID found!'));
      console.log(chalk.green('✓ Generating new session...\n'));
      return false;
    }

    if (this.sessionManager.sessionExists()) {
      console.log(chalk.green('✓ Existing session found!'));
      console.log(chalk.green('✓ Using existing session...\n'));
      return true;
    } else {
      console.log(chalk.yellow('⚠️  SESSION_ID set but no session file found!'));
      console.log(chalk.green('✓ Generating new session...\n'));
      return false;
    }
  }

  /**
   * Get pairing code
   */
  async getPairingCode(sock) {
    if (!config.USE_PAIRING_CODE) return;

    let phoneNumber = config.PAIRING_NUMBER;

    if (!phoneNumber) {
      phoneNumber = await question(chalk.cyan('Enter your WhatsApp number (with country code, e.g., 27747815326): '));
    }

    // Remove any non-numeric characters
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');

    if (!phoneNumber) {
      console.log(chalk.red('Invalid phone number!'));
      process.exit(1);
    }

    console.log(chalk.yellow('\n⏳ Requesting pairing code...\n'));

    try {
      const code = await sock.requestPairingCode(phoneNumber);
      console.log(chalk.green('╔════════════════════════════════════════╗'));
      console.log(chalk.green('║         PAIRING CODE                  ║'));
      console.log(chalk.green('╠════════════════════════════════════════╣'));
      console.log(chalk.green(`║           ${code}                    ║`));
      console.log(chalk.green('╚════════════════════════════════════════╝\n'));
      console.log(chalk.cyan('Enter this code in WhatsApp:'));
      console.log(chalk.cyan('1. Open WhatsApp on your phone'));
      console.log(chalk.cyan('2. Go to Settings > Linked Devices'));
      console.log(chalk.cyan('3. Tap "Link a Device"'));
      console.log(chalk.cyan('4. Enter the code above\n'));
    } catch (error) {
      console.log(chalk.red('Error requesting pairing code:', error.message));
      process.exit(1);
    }
  }

  /**
   * Initialize connection
   */
  async connect() {
    const sessionExists = await this.checkSessionConfig();
    const sessionPath = this.sessionManager.getAuthPath();

    const { state, saveCreds } = await useMultiFileAuthState(sessionPath);
    const { version } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
      version,
      logger: pino({ level: 'silent' }),
      printQRInTerminal: !config.USE_PAIRING_CODE,
      browser: Browsers.ubuntu('Chrome'),
      auth: {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'silent' }))
      },
      getMessage: async (key) => {
        return { conversation: '' };
      }
    });

    this.sock = sock;

    // Handle pairing code
    if (config.USE_PAIRING_CODE && !sock.authState.creds.registered) {
      await this.getPairingCode(sock);
    }

    // Save credentials on update
    sock.ev.on('creds.update', saveCreds);

    return sock;
  }
}

export default AuthHandler;
