# BLUEBOT-X Installation Guide

## Quick Start Guide

### Prerequisites

1. **Node.js** (v18.0.0 or higher)
   ```bash
   node --version
   ```

2. **Package Manager** (npm or pnpm)
   ```bash
   npm --version
   # or
   pnpm --version
   ```

3. **Git** (for cloning)
   ```bash
   git --version
   ```

### Installation Steps

#### Step 1: Clone Repository

```bash
git clone https://github.com/mudau_t/BLUEBOT-X.git
cd BLUEBOT-X
```

#### Step 2: Install Dependencies

Using pnpm (recommended):
```bash
pnpm install
```

Using npm:
```bash
npm install
```

#### Step 3: Configure Bot

Edit the `.env` file:

```env
SESSION_ID=
USE_CONFIG=false
BOT_NAME=BLUEBOT-X
PREFIX=.
OWNER_NUMBER=YOUR_NUMBER_HERE
OWNER_NAME=YOUR_NAME_HERE
MODE=public
USE_PAIRING_CODE=true
PAIRING_NUMBER=YOUR_NUMBER_HERE
```

**Important**: Replace `YOUR_NUMBER_HERE` with your actual phone number (with country code, e.g., 27747815326)

#### Step 4: Start Bot

```bash
npm start
```

Or using the start script:
```bash
./start.sh
```

#### Step 5: Pair with WhatsApp

1. When prompted, enter your WhatsApp number (with country code)
2. You'll receive a pairing code like: `XXXX-XXXX`
3. Open WhatsApp on your phone
4. Go to **Settings** > **Linked Devices**
5. Tap **"Link a Device"**
6. Enter the pairing code
7. Wait for connection confirmation

### Verification

Once connected, test the bot:

```
.ping
.alive
.menu
```

### Troubleshooting

#### Bot Won't Start

```bash
# Check Node.js version
node --version

# Reinstall dependencies
rm -rf node_modules
pnpm install

# Check for errors
node index.js
```

#### Connection Issues

```bash
# Delete session and regenerate
rm -rf session/
node index.js
```

#### Permission Issues

```bash
# Make start script executable
chmod +x start.sh

# Run with proper permissions
./start.sh
```

### Running on VPS/Server

#### Using PM2 (Recommended)

```bash
# Install PM2
npm install -g pm2

# Start bot with PM2
pm2 start index.js --name BLUEBOT-X

# Save PM2 configuration
pm2 save

# Setup auto-start on boot
pm2 startup
```

#### Using Screen

```bash
# Start screen session
screen -S bluebot

# Run bot
npm start

# Detach: Ctrl+A then D
# Reattach: screen -r bluebot
```

#### Using Systemd

Create `/etc/systemd/system/bluebot.service`:

```ini
[Unit]
Description=BLUEBOT-X WhatsApp Bot
After=network.target

[Service]
Type=simple
User=YOUR_USER
WorkingDirectory=/path/to/BLUEBOT-X
ExecStart=/usr/bin/node index.js
Restart=always

[Install]
WantedBy=multi-user.target
```

Then:
```bash
sudo systemctl enable bluebot
sudo systemctl start bluebot
sudo systemctl status bluebot
```

### Docker Installation

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node", "index.js"]
```

Build and run:
```bash
docker build -t bluebot-x .
docker run -d --name bluebot -v $(pwd)/session:/app/session bluebot-x
```

### Environment Variables

All configuration options:

```env
# Session
SESSION_ID=
USE_CONFIG=false

# Bot Info
BOT_NAME=BLUEBOT-X
PREFIX=.
OWNER_NUMBER=27747815326
OWNER_NAME=mudau_t

# Mode
MODE=public
AUTO_READ=false
AUTO_STATUS_READ=false
AUTO_TYPING=false
AUTO_RECORDING=false
ALWAYS_ONLINE=true

# Group Settings
ANTI_LINK=false
ANTI_BAD_WORD=false
WELCOME_MSG=true
GOODBYE_MSG=true

# Users
ADMIN_NUMBERS=
MOD_NUMBERS=

# API Keys
OPENAI_API_KEY=
WEATHER_API_KEY=

# Database
DATABASE_URL=

# Timezone
TIMEZONE=Africa/Johannesburg

# Pairing
USE_PAIRING_CODE=true
PAIRING_NUMBER=
```

### Support

For help:
- WhatsApp: +27747815326
- Email: support@bluebot.com
- GitHub Issues: github.com/mudau_t/BLUEBOT-X/issues

### Developer

**mudau_t** - Lead Developer
- Contact: +27747815326
- Email: mudau_t@developer.com

---

**⚠️ MODIFICATION IS STRICTLY PROHIBITED ⚠️**

© 2024 mudau_t. All Rights Reserved.
