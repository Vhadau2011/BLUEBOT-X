require('dotenv').config()
const fs = require('fs')
const path = require('path')
const Pino = require('pino')
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require('@whiskeysockets/baileys')

// --------------------
// CONFIG
// --------------------
const config = {
  OWNER: process.env.OWNER_NUMBER,
  BOT_NAME: process.env.BOT_NAME || 'BLUEBOT-X',
  OWNER_NAME: process.env.OWNER_NAME || 'Thendo',
  PREFIX: process.env.PREFIX || '.',
  MODS: process.env.MODS
    ? process.env.MODS.split(',').map(n => n.trim())
    : []
}

// --------------------
// SESSION PATH (multi-session support)
// --------------------
const SESSION_ID = process.env.SESSION_ID
if (!SESSION_ID) {
  console.error('❌ SESSION_ID not set in .env!')
  process.exit(1)
}

const SESSION_PATH = path.join(__dirname, 'session', SESSION_ID)
if (!fs.existsSync(SESSION_PATH)) fs.mkdirSync(SESSION_PATH, { recursive: true })

console.log(`🟢 Using session: ${SESSION_ID}`)

// --------------------
// LOAD COMMANDS
// --------------------
const commands = []
const cmdPath = path.join(__dirname, 'cmds')
fs.readdirSync(cmdPath).forEach(file => {
  if (file.endsWith('.js')) {
    const cmd = require(path.join(cmdPath, file))
    commands.push(cmd)
  }
})

// --------------------
// START BOT
// --------------------
async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState(SESSION_PATH)

  const sock = makeWASocket({
    logger: Pino({ level: 'silent' }),
    auth: state,
    printQRInTerminal: true
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', update => {
    const { connection, lastDisconnect } = update

    if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode
      console.log('❌ Connection closed, reconnecting...', reason)
      if (reason !== DisconnectReason.loggedOut) startBot()
    }

    if (connection === 'open') {
      console.log(`✅ ${config.BOT_NAME} connected successfully!`)
    }
  })

  // --------------------
  // MESSAGE HANDLER
  // --------------------
  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message || msg.key.fromMe) return

    const from = msg.key.remoteJid
    const sender = msg.key.participant || from
    const senderNumber = sender.split('@')[0]

    const text =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text ||
      ''

    if (!text.startsWith(config.PREFIX)) return

    const args = text.slice(config.PREFIX.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()

    const command = commands.find(cmd => cmd.name === commandName)
    if (!command) return

    const isOwner = senderNumber === config.OWNER
    const isMod = config.MODS.includes(senderNumber)

    try {
      await command.execute({
        sock,
        msg,
        args,
        from,
        sender: senderNumber,
        isOwner,
        isMod,
        config,
        commands
      })
    } catch (err) {
      console.error(err)
      await sock.sendMessage(from, {
        text: '❌ Error running command'
      })
    }
  })
}

// --------------------
// RUN BOT
// --------------------
startBot()
