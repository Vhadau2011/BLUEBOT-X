# BLUEBOT-X v2.0.0

<div align="center">

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ██████╗ ██╗     ██╗   ██╗███████╗██████╗  ██████╗ ████████╗   ║
║   ██╔══██╗██║     ██║   ██║██╔════╝██╔══██╗██╔═══██╗╚══██╔══╝   ║
║   ██████╔╝██║     ██║   ██║█████╗  ██████╔╝██║   ██║   ██║      ║
║   ██╔══██╗██║     ██║   ██║██╔══╝  ██╔══██╗██║   ██║   ██║      ║
║   ██████╔╝███████╗╚██████╔╝███████╗██████╔╝╚██████╔╝   ██║      ║
║   ╚═════╝ ╚══════╝ ╚═════╝ ╚══════╝╚═════╝  ╚═════╝    ╚═╝      ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

### 🚀 Advanced WhatsApp Bot with 205+ Commands

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/mudau_t/BLUEBOT-X)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-Custom-red.svg)](./LICENSE)
[![Developer](https://img.shields.io/badge/developer-mudau__t-orange.svg)](https://github.com/mudau_t)

**⚠️ MODIFICATION IS STRICTLY PROHIBITED ⚠️**

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Command Categories](#-command-categories)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Session Management](#-session-management)
- [Pairing Code Authentication](#-pairing-code-authentication)
- [Usage](#-usage)
- [Command List](#-command-list)
- [Permissions System](#-permissions-system)
- [Environment Variables](#-environment-variables)
- [Troubleshooting](#-troubleshooting)
- [FAQ](#-faq)
- [Support](#-support)
- [License](#-license)
- [Developer](#-developer)
- [Disclaimer](#-disclaimer)

---

## 🌟 Overview

**BLUEBOT-X** is a powerful, feature-rich WhatsApp bot built with modern technologies and designed for maximum functionality. With over **205 commands** across **7 categories**, this bot provides comprehensive automation and management capabilities for WhatsApp groups and personal chats.

### Key Highlights

- 🎯 **205+ Commands** across 7 distinct categories
- 🔐 **Advanced Session Management** with pairing code authentication
- 🛡️ **Multi-tier Permission System** (Owner, Admin, Moderator)
- 📱 **Group Management** with advanced moderation tools
- 🎮 **Fun & Interactive** commands for entertainment
- 💻 **Developer Tools** for advanced users
- 🔄 **Auto-reconnect** and error handling
- 📊 **Comprehensive Logging** system
- 🌐 **Multi-configuration** support (config.js or .env)

---

## ✨ Features

### Core Features

- ✅ **Pairing Code Authentication** - No QR code scanning required
- ✅ **Session Persistence** - Maintains connection across restarts
- ✅ **Multi-configuration** - Use config.js or .env file
- ✅ **Auto Session Detection** - Automatically checks and generates sessions
- ✅ **Command Categorization** - Organized command structure
- ✅ **Permission Levels** - Owner, Admin, Moderator, User
- ✅ **Group Management** - Complete group control tools
- ✅ **Auto Welcome/Goodbye** - Customizable group messages
- ✅ **Anti-link Protection** - Prevent spam links
- ✅ **Warning System** - Warn and manage users
- ✅ **Ban System** - Ban problematic users
- ✅ **Broadcast Messages** - Send to all groups/users
- ✅ **Auto-reconnect** - Never goes offline
- ✅ **Error Handling** - Robust error management
- ✅ **Logging System** - Track all activities

### Advanced Features

- 🔧 **Custom Prefix** - Set your own command prefix
- 🌍 **Timezone Support** - Configure your timezone
- 📝 **Custom Responses** - Set auto-responses
- 🎭 **Role Management** - Assign roles to users
- 📊 **Statistics** - Track bot usage
- 🔄 **Hot Reload** - Reload commands without restart
- 💾 **Backup/Restore** - Save and restore data
- 🎨 **Customizable** - Extensive configuration options

---

## 📁 Command Categories

BLUEBOT-X organizes commands into **7 main categories**:

| Category | Commands | Description |
|----------|----------|-------------|
| 👥 **Group** | 20 | Group management and moderation |
| 📋 **General** | 50 | General purpose commands |
| ⚡ **Admin** | 35 | Bot admin commands |
| 👑 **Owner** | 25 | Bot owner exclusive commands |
| 🛡️ **Mods** | 20 | Moderator commands |
| 🎮 **Fun** | 40 | Entertainment and games |
| 💻 **Dev** | 15 | Developer tools |

**Total: 205+ Commands**

---

## 🚀 Installation

### Prerequisites

Before installing BLUEBOT-X, ensure you have:

- **Node.js** v18.0.0 or higher
- **npm** or **pnpm** package manager
- **Git** (for cloning)
- A **WhatsApp account** for the bot
- **Terminal/Command Prompt** access

### Step 1: Clone Repository

```bash
git clone https://github.com/mudau_t/BLUEBOT-X.git
cd BLUEBOT-X
```

### Step 2: Install Dependencies

Using npm:
```bash
npm install
```

Using pnpm (recommended):
```bash
pnpm install
```

### Step 3: Configure Bot

Choose one of two configuration methods:

#### Option A: Using .env file (Recommended)

1. Copy the `.env` file
2. Edit the configuration:

```env
SESSION_ID=
USE_CONFIG=false
BOT_NAME=BLUEBOT-X
PREFIX=.
OWNER_NUMBER=27747815326
OWNER_NAME=mudau_t
MODE=public
USE_PAIRING_CODE=true
PAIRING_NUMBER=
```

#### Option B: Using config.js

1. Open `config.js`
2. Set `USE_CONFIG` to `true` in `.env`
3. Edit configuration in `config.js`

### Step 4: Start Bot

```bash
npm start
```

Or with pnpm:
```bash
pnpm start
```

---

## ⚙️ Configuration

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `BOT_NAME` | String | BLUEBOT-X | Bot display name |
| `PREFIX` | String | . | Command prefix |
| `OWNER_NUMBER` | String | 27747815326 | Owner phone number |
| `OWNER_NAME` | String | mudau_t | Owner name |
| `SESSION_ID` | String | "" | Session identifier |
| `USE_CONFIG` | Boolean | false | Use config.js instead of .env |
| `MODE` | String | public | Bot mode (public/private) |
| `AUTO_READ` | Boolean | false | Auto-read messages |
| `AUTO_STATUS_READ` | Boolean | false | Auto-read status |
| `AUTO_TYPING` | Boolean | false | Show typing indicator |
| `AUTO_RECORDING` | Boolean | false | Show recording indicator |
| `ALWAYS_ONLINE` | Boolean | true | Always show online |
| `ANTI_LINK` | Boolean | false | Enable anti-link |
| `ANTI_BAD_WORD` | Boolean | false | Enable bad word filter |
| `WELCOME_MSG` | Boolean | true | Send welcome messages |
| `GOODBYE_MSG` | Boolean | true | Send goodbye messages |
| `USE_PAIRING_CODE` | Boolean | true | Use pairing code instead of QR |
| `PAIRING_NUMBER` | String | "" | Number for pairing |

### Admin & Moderator Configuration

Add admin and moderator numbers (comma-separated):

```env
ADMIN_NUMBERS=27123456789,27987654321
MOD_NUMBERS=27111222333,27444555666
```

---

## 🔐 Session Management

BLUEBOT-X features an intelligent session management system that automatically handles authentication.

### How It Works

1. **First Run**: Bot checks for `SESSION_ID` in configuration
2. **No Session**: Generates new session with pairing code
3. **Existing Session**: Uses saved session to connect
4. **Session Validation**: Verifies session integrity
5. **Auto-save**: Saves session automatically

### Session Storage

Sessions are stored in the `session/` directory:
- `creds.json` - Authentication credentials
- `session.json` - Session metadata

### Session Regeneration

If you need to regenerate the session:

1. Delete the `session/` folder
2. Clear `SESSION_ID` in configuration
3. Restart the bot
4. Follow pairing code instructions

---

## 📱 Pairing Code Authentication

BLUEBOT-X uses **pairing code authentication** instead of QR codes for easier setup.

### Setup Process

1. **Start the Bot**:
   ```bash
   npm start
   ```

2. **Enter Phone Number**:
   ```
   Enter your WhatsApp number (with country code, e.g., 27747815326):
   ```

3. **Receive Pairing Code**:
   ```
   ╔════════════════════════════════════════╗
   ║         PAIRING CODE                  ║
   ╠════════════════════════════════════════╣
   ║           XXXX-XXXX                   ║
   ╚════════════════════════════════════════╝
   ```

4. **Link Device**:
   - Open WhatsApp on your phone
   - Go to **Settings** > **Linked Devices**
   - Tap **"Link a Device"**
   - Enter the pairing code

5. **Connection Established**:
   ```
   ✓ Connected to WhatsApp successfully!
   ```

### Advantages of Pairing Code

- ✅ No need to scan QR codes
- ✅ Works on headless servers
- ✅ Easier for remote deployment
- ✅ More reliable connection
- ✅ Better for automation

---

## 📖 Usage

### Basic Command Structure

```
[PREFIX][COMMAND] [ARGUMENTS]
```

Example:
```
.menu
.ping
.tagall Hello everyone!
```

### Getting Started

1. **View Menu**:
   ```
   .menu
   ```

2. **View Category Commands**:
   ```
   .menu general
   .menu group
   .menu fun
   ```

3. **Get Help**:
   ```
   .help [command]
   ```

4. **Check Status**:
   ```
   .alive
   .ping
   ```

---

## 📜 Command List

### 👥 Group Commands (20)

| Command | Description | Usage |
|---------|-------------|-------|
| `.tagall` | Tag all members | `.tagall [message]` |
| `.hidetag` | Hidden tag | `.hidetag [message]` |
| `.groupinfo` | Group information | `.groupinfo` |
| `.grouplink` | Get group link | `.grouplink` |
| `.resetlink` | Reset group link | `.resetlink` |
| `.groupdp` | Set group icon | `.groupdp [reply to image]` |
| `.groupname` | Set group name | `.groupname [name]` |
| `.groupdesc` | Set description | `.groupdesc [description]` |
| `.announce` | Group announcement | `.announce [on/off]` |
| `.welcome` | Toggle welcome | `.welcome [on/off]` |
| `.goodbye` | Toggle goodbye | `.goodbye [on/off]` |
| `.antilink` | Toggle antilink | `.antilink [on/off]` |
| `.poll` | Create poll | `.poll [question]` |
| `.vote` | Vote in poll | `.vote [option]` |
| `.groupstats` | Group statistics | `.groupstats` |
| `.active` | Most active members | `.active` |
| `.inactive` | Inactive members | `.inactive` |
| `.admins` | List group admins | `.admins` |
| `.invite` | Invite user | `.invite [number]` |
| `.join` | Join group | `.join [link]` |

### 📋 General Commands (50)

| Command | Description | Usage |
|---------|-------------|-------|
| `.menu` | Display menu | `.menu [category]` |
| `.mods` | Show moderators | `.mods` |
| `.ping` | Check latency | `.ping` |
| `.alive` | Check if alive | `.alive` |
| `.info` | Bot information | `.info` |
| `.owner` | Owner information | `.owner` |
| `.runtime` | Bot runtime | `.runtime` |
| `.support` | Get support | `.support` |
| `.donate` | Donation info | `.donate` |
| `.features` | List features | `.features` |
| `.about` | About bot | `.about` |
| `.version` | Bot version | `.version` |
| `.contact` | Contact owner | `.contact` |
| `.report` | Report bug | `.report [message]` |
| `.feedback` | Send feedback | `.feedback [message]` |
| `.stats` | Bot statistics | `.stats` |
| `.server` | Server info | `.server` |
| `.profile` | Your profile | `.profile` |
| `.rank` | Your rank | `.rank` |
| `.leaderboard` | Top users | `.leaderboard` |
| `.daily` | Daily reward | `.daily` |
| `.balance` | Check balance | `.balance` |
| `.inventory` | Your inventory | `.inventory` |
| `.shop` | Bot shop | `.shop` |
| `.buy` | Buy items | `.buy [item]` |
| `.sell` | Sell items | `.sell [item]` |
| `.transfer` | Transfer coins | `.transfer [@user] [amount]` |
| `.quote` | Random quote | `.quote` |
| `.fact` | Random fact | `.fact` |
| `.advice` | Random advice | `.advice` |
| `.joke` | Random joke | `.joke` |
| `.meme` | Random meme | `.meme` |
| `.weather` | Weather info | `.weather [city]` |
| `.time` | Current time | `.time [timezone]` |
| `.calculator` | Calculate | `.calculator [expression]` |
| `.translate` | Translate text | `.translate [lang] [text]` |
| `.currency` | Convert currency | `.currency [amount] [from] [to]` |
| `.qr` | Generate QR | `.qr [text]` |
| `.short` | Shorten URL | `.short [url]` |
| `.wiki` | Wikipedia | `.wiki [query]` |
| `.google` | Google search | `.google [query]` |
| `.image` | Image search | `.image [query]` |
| `.lyrics` | Song lyrics | `.lyrics [song]` |
| `.movie` | Movie info | `.movie [title]` |
| `.anime` | Anime info | `.anime [name]` |
| `.crypto` | Crypto prices | `.crypto [symbol]` |
| `.news` | Latest news | `.news [category]` |
| `.covid` | COVID-19 stats | `.covid [country]` |
| `.dictionary` | Define word | `.dictionary [word]` |
| `.urban` | Urban dictionary | `.urban [word]` |

### ⚡ Admin Commands (35)

| Command | Description | Usage |
|---------|-------------|-------|
| `.kick` | Kick member | `.kick [@user]` |
| `.add` | Add member | `.add [number]` |
| `.promote` | Promote to admin | `.promote [@user]` |
| `.demote` | Demote from admin | `.demote [@user]` |
| `.delete` | Delete message | `.delete [reply]` |
| `.mute` | Mute group | `.mute` |
| `.unmute` | Unmute group | `.unmute` |
| `.lock` | Lock group | `.lock` |
| `.unlock` | Unlock group | `.unlock` |
| `.warn` | Warn user | `.warn [@user] [reason]` |
| `.unwarn` | Remove warning | `.unwarn [@user]` |
| `.warnings` | List warnings | `.warnings [@user]` |
| `.ban` | Ban user | `.ban [@user]` |
| `.unban` | Unban user | `.unban [@user]` |
| `.banlist` | List banned | `.banlist` |
| `.clear` | Clear messages | `.clear [amount]` |
| `.setwelcome` | Set welcome | `.setwelcome [message]` |
| `.setgoodbye` | Set goodbye | `.setgoodbye [message]` |
| `.setprefix` | Change prefix | `.setprefix [prefix]` |
| `.antibot` | Toggle antibot | `.antibot [on/off]` |
| `.antispam` | Toggle antispam | `.antispam [on/off]` |
| `.antitoxic` | Toggle antitoxic | `.antitoxic [on/off]` |
| `.autoread` | Toggle autoread | `.autoread [on/off]` |
| `.autoreply` | Toggle autoreply | `.autoreply [on/off]` |
| `.filter` | Add filter | `.filter [word]` |
| `.unfilter` | Remove filter | `.unfilter [word]` |
| `.filters` | List filters | `.filters` |
| `.setlang` | Set language | `.setlang [code]` |
| `.timezone` | Set timezone | `.timezone [zone]` |
| `.backup` | Backup data | `.backup` |
| `.restore` | Restore data | `.restore` |
| `.groupsettings` | Group settings | `.groupsettings` |
| `.botsettings` | Bot settings | `.botsettings` |
| `.logs` | View logs | `.logs` |
| `.report` | Report user | `.report [@user] [reason]` |

### 👑 Owner Commands (25)

| Command | Description | Usage |
|---------|-------------|-------|
| `.broadcast` | Broadcast message | `.broadcast [message]` |
| `.broadcastgc` | Broadcast to groups | `.broadcastgc [message]` |
| `.setbotname` | Set bot name | `.setbotname [name]` |
| `.setbotstatus` | Set bot status | `.setbotstatus [status]` |
| `.setbotbio` | Set bot bio | `.setbotbio [bio]` |
| `.setbotpp` | Set bot picture | `.setbotpp [reply to image]` |
| `.block` | Block user | `.block [@user]` |
| `.unblock` | Unblock user | `.unblock [@user]` |
| `.blocklist` | List blocked | `.blocklist` |
| `.leave` | Leave group | `.leave` |
| `.shutdown` | Shutdown bot | `.shutdown` |
| `.restart` | Restart bot | `.restart` |
| `.update` | Update bot | `.update` |
| `.backup` | Backup all | `.backup` |
| `.restore` | Restore all | `.restore` |
| `.clearall` | Clear all data | `.clearall` |
| `.addadmin` | Add admin | `.addadmin [number]` |
| `.removeadmin` | Remove admin | `.removeadmin [number]` |
| `.adminlist` | List admins | `.adminlist` |
| `.addmod` | Add moderator | `.addmod [number]` |
| `.removemod` | Remove moderator | `.removemod [number]` |
| `.modlist` | List moderators | `.modlist` |
| `.setmode` | Set bot mode | `.setmode [public/private]` |
| `.maintenance` | Toggle maintenance | `.maintenance [on/off]` |
| `.autorespond` | Set auto response | `.autorespond [trigger] [response]` |

### 🛡️ Moderator Commands (20)

| Command | Description | Usage |
|---------|-------------|-------|
| `.muteuser` | Mute user | `.muteuser [@user]` |
| `.unmuteuser` | Unmute user | `.unmuteuser [@user]` |
| `.mutelist` | List muted | `.mutelist` |
| `.slowmode` | Toggle slowmode | `.slowmode [seconds]` |
| `.lockdown` | Lockdown group | `.lockdown` |
| `.unlockdown` | Remove lockdown | `.unlockdown` |
| `.approve` | Approve user | `.approve [@user]` |
| `.disapprove` | Disapprove user | `.disapprove [@user]` |
| `.approved` | List approved | `.approved` |
| `.restrict` | Restrict user | `.restrict [@user]` |
| `.unrestrict` | Unrestrict user | `.unrestrict [@user]` |
| `.restricted` | List restricted | `.restricted` |
| `.verify` | Verify user | `.verify [@user]` |
| `.unverify` | Unverify user | `.unverify [@user]` |
| `.verified` | List verified | `.verified` |
| `.setrules` | Set rules | `.setrules [rules]` |
| `.rules` | View rules | `.rules` |
| `.note` | Add note | `.note [name] [content]` |
| `.delnote` | Delete note | `.delnote [name]` |
| `.notes` | List notes | `.notes` |

### 🎮 Fun Commands (40)

| Command | Description | Usage |
|---------|-------------|-------|
| `.8ball` | Magic 8 ball | `.8ball [question]` |
| `.dice` | Roll dice | `.dice` |
| `.coinflip` | Flip coin | `.coinflip` |
| `.rps` | Rock paper scissors | `.rps [choice]` |
| `.slot` | Slot machine | `.slot` |
| `.trivia` | Trivia quiz | `.trivia` |
| `.truth` | Truth question | `.truth` |
| `.dare` | Dare challenge | `.dare` |
| `.wyr` | Would you rather | `.wyr` |
| `.ship` | Ship users | `.ship [@user1] [@user2]` |
| `.rate` | Rate something | `.rate [thing]` |
| `.roast` | Roast someone | `.roast [@user]` |
| `.compliment` | Compliment | `.compliment [@user]` |
| `.pickup` | Pickup line | `.pickup` |
| `.insult` | Insult generator | `.insult` |
| `.fortune` | Fortune telling | `.fortune` |
| `.horoscope` | Daily horoscope | `.horoscope [sign]` |
| `.compatibility` | Love compatibility | `.compatibility [@user1] [@user2]` |
| `.gay` | Gay rate | `.gay [@user]` |
| `.simp` | Simp rate | `.simp [@user]` |
| `.sigma` | Sigma rate | `.sigma [@user]` |
| `.iq` | IQ test | `.iq [@user]` |
| `.hack` | Fake hack | `.hack [@user]` |
| `.kill` | Fake kill | `.kill [@user]` |
| `.slap` | Slap someone | `.slap [@user]` |
| `.hug` | Hug someone | `.hug [@user]` |
| `.kiss` | Kiss someone | `.kiss [@user]` |
| `.pat` | Pat someone | `.pat [@user]` |
| `.poke` | Poke someone | `.poke [@user]` |
| `.tickle` | Tickle someone | `.tickle [@user]` |
| `.bite` | Bite someone | `.bite [@user]` |
| `.lick` | Lick someone | `.lick [@user]` |
| `.punch` | Punch someone | `.punch [@user]` |
| `.kick` | Kick someone | `.kick [@user]` |
| `.shoot` | Shoot someone | `.shoot [@user]` |
| `.stab` | Stab someone | `.stab [@user]` |
| `.marry` | Marry someone | `.marry [@user]` |
| `.divorce` | Divorce someone | `.divorce [@user]` |
| `.adopt` | Adopt someone | `.adopt [@user]` |
| `.disown` | Disown someone | `.disown [@user]` |

### 💻 Developer Commands (15)

| Command | Description | Usage |
|---------|-------------|-------|
| `.eval` | Execute code | `.eval [code]` |
| `.shell` | Execute shell | `.shell [command]` |
| `.logs` | View error logs | `.logs` |
| `.clearlogs` | Clear logs | `.clearlogs` |
| `.test` | Test command | `.test` |
| `.debug` | Toggle debug | `.debug [on/off]` |
| `.performance` | Performance stats | `.performance` |
| `.memory` | Memory usage | `.memory` |
| `.cpu` | CPU usage | `.cpu` |
| `.database` | Database stats | `.database` |
| `.cache` | Clear cache | `.cache` |
| `.reload` | Reload command | `.reload [command]` |
| `.reloadall` | Reload all | `.reloadall` |
| `.simulate` | Simulate event | `.simulate [event]` |
| `.inject` | Inject code | `.inject [code]` |

---

## 🔒 Permissions System

BLUEBOT-X implements a hierarchical permission system:

### Permission Levels

1. **👑 Owner** (Highest)
   - Full bot control
   - All commands access
   - Configuration management
   - User management

2. **⚡ Admin**
   - Group management
   - User moderation
   - Bot settings
   - Most commands

3. **🛡️ Moderator**
   - User moderation
   - Content management
   - Limited bot control
   - Mod commands

4. **👥 User** (Lowest)
   - General commands
   - Fun commands
   - Basic features
   - No admin access

### Setting Permissions

Add users to permission levels in configuration:

```env
OWNER_NUMBER=27747815326
ADMIN_NUMBERS=27123456789,27987654321
MOD_NUMBERS=27111222333,27444555666
```

---

## 🌐 Environment Variables

### Complete Variable List

```env
# Session Configuration
SESSION_ID=                    # Session identifier
USE_CONFIG=false              # Use config.js instead of .env

# Bot Information
BOT_NAME=BLUEBOT-X            # Bot display name
PREFIX=.                      # Command prefix
OWNER_NUMBER=27747815326      # Owner phone number
OWNER_NAME=mudau_t            # Owner name

# Bot Mode
MODE=public                   # public or private
AUTO_READ=false               # Auto-read messages
AUTO_STATUS_READ=false        # Auto-read status
AUTO_TYPING=false             # Show typing indicator
AUTO_RECORDING=false          # Show recording indicator
ALWAYS_ONLINE=true            # Always show online

# Group Settings
ANTI_LINK=false               # Enable anti-link
ANTI_BAD_WORD=false           # Enable bad word filter
WELCOME_MSG=true              # Send welcome messages
GOODBYE_MSG=true              # Send goodbye messages

# User Management
ADMIN_NUMBERS=                # Comma-separated admin numbers
MOD_NUMBERS=                  # Comma-separated mod numbers

# API Keys (Optional)
OPENAI_API_KEY=               # OpenAI API key
WEATHER_API_KEY=              # Weather API key

# Database
DATABASE_URL=                 # Database connection URL

# Localization
TIMEZONE=Africa/Johannesburg  # Timezone

# Authentication
USE_PAIRING_CODE=true         # Use pairing code
PAIRING_NUMBER=               # Number for pairing
```

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Bot Won't Start

**Problem**: Bot fails to start or crashes immediately

**Solutions**:
- Check Node.js version: `node --version` (must be ≥18.0.0)
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check configuration file syntax
- Review error logs

#### 2. Connection Issues

**Problem**: Bot can't connect to WhatsApp

**Solutions**:
- Delete `session/` folder and regenerate
- Check internet connection
- Verify phone number format
- Try pairing code again
- Check firewall settings

#### 3. Commands Not Working

**Problem**: Bot doesn't respond to commands

**Solutions**:
- Verify prefix is correct
- Check command spelling
- Ensure bot has proper permissions
- Check if command category requires special permissions
- Review bot logs for errors

#### 4. Pairing Code Not Working

**Problem**: Pairing code fails or expires

**Solutions**:
- Generate new pairing code
- Enter code within 60 seconds
- Check phone number format (include country code)
- Ensure WhatsApp is updated
- Try QR code method instead

#### 5. Session Expired

**Problem**: Bot keeps asking for new session

**Solutions**:
- Check `SESSION_ID` in configuration
- Verify `session/` folder exists
- Ensure credentials file is not corrupted
- Regenerate session completely

#### 6. Permission Denied Errors

**Problem**: Commands fail with permission errors

**Solutions**:
- Check user permission level
- Verify admin/mod numbers in config
- Ensure bot is group admin (for group commands)
- Check command category requirements

### Debug Mode

Enable debug mode for detailed logging:

```env
DEBUG=true
```

Or use the debug command:
```
.debug on
```

### Getting Help

If issues persist:

1. Check the [FAQ](#-faq) section
2. Review error logs: `.logs`
3. Contact support: `.support`
4. Report bugs: `.report [description]`

---

## ❓ FAQ

### General Questions

**Q: What is BLUEBOT-X?**
A: BLUEBOT-X is an advanced WhatsApp bot with 205+ commands for group management, entertainment, and automation.

**Q: Is BLUEBOT-X free?**
A: Yes, BLUEBOT-X is free to use. However, modification is strictly prohibited.

**Q: Can I modify the bot?**
A: No, modification is strictly prohibited as per the license agreement.

**Q: Who developed BLUEBOT-X?**
A: BLUEBOT-X was developed by mudau_t.

### Technical Questions

**Q: What Node.js version is required?**
A: Node.js v18.0.0 or higher is required.

**Q: Can I use this on a VPS?**
A: Yes, BLUEBOT-X works perfectly on VPS, dedicated servers, or cloud platforms.

**Q: Does it support multiple WhatsApp accounts?**
A: Currently, BLUEBOT-X supports one WhatsApp account per instance.

**Q: How do I update the bot?**
A: Use the `.update` command (owner only) or pull latest changes from repository.

### Configuration Questions

**Q: Should I use config.js or .env?**
A: Both work fine. Use .env for easier deployment, config.js for more control.

**Q: How do I change the prefix?**
A: Set `PREFIX` in your configuration file or use `.setprefix` command.

**Q: Can I add multiple admins?**
A: Yes, add comma-separated numbers to `ADMIN_NUMBERS` in configuration.

**Q: How do I disable welcome messages?**
A: Set `WELCOME_MSG=false` in configuration or use `.welcome off` command.

### Session Questions

**Q: What is a session?**
A: A session stores your WhatsApp authentication, allowing the bot to stay connected.

**Q: How long does a session last?**
A: Sessions persist indefinitely unless deleted or invalidated by WhatsApp.

**Q: Can I transfer sessions between servers?**
A: Yes, copy the `session/` folder to the new server.

**Q: What if my session gets corrupted?**
A: Delete the `session/` folder and generate a new session.

### Command Questions

**Q: How many commands are there?**
A: BLUEBOT-X has 205+ commands across 7 categories.

**Q: Can I create custom commands?**
A: No, custom commands require modification which is prohibited.

**Q: Why don't some commands work?**
A: Commands may require specific permissions or may only work in groups.

**Q: How do I see all commands?**
A: Use `.menu` to see all categories, then `.menu [category]` for specific commands.

---

## 💬 Support

### Getting Support

Need help? We're here for you!

#### Official Channels

- 📱 **WhatsApp**: +27747815326
- 📧 **Email**: support@bluebot.com
- 🌐 **Website**: https://bluebot.com
- 💬 **Discord**: discord.gg/bluebot
- 🐛 **GitHub Issues**: github.com/mudau_t/BLUEBOT-X/issues

#### In-Bot Support

Use these commands for quick help:

```
.support    - Get support information
.report     - Report a bug
.feedback   - Send feedback
.contact    - Contact owner
```

### Community

Join our community:

- 👥 **WhatsApp Group**: [Join Here]
- 💬 **Discord Server**: [Join Here]
- 📱 **Telegram**: [Join Here]

### Response Time

- **Critical Issues**: Within 24 hours
- **General Support**: 1-3 business days
- **Feature Requests**: Reviewed weekly

---

## 📄 License

### Custom License Agreement

**Copyright © 2024 mudau_t. All Rights Reserved.**

#### Terms and Conditions

1. **Usage Rights**
   - ✅ You MAY use this bot for personal or commercial purposes
   - ✅ You MAY deploy this bot on your own servers
   - ✅ You MAY configure the bot according to your needs

2. **Restrictions**
   - ❌ You MAY NOT modify any part of the source code
   - ❌ You MAY NOT remove or alter developer credits
   - ❌ You MAY NOT redistribute modified versions
   - ❌ You MAY NOT claim this work as your own
   - ❌ You MAY NOT sell or sublicense this software

3. **Developer Credits**
   - All developer credits MUST remain intact
   - The developer name "mudau_t" MUST NOT be removed
   - Copyright notices MUST NOT be altered

4. **Liability**
   - This software is provided "AS IS" without warranty
   - The developer is not liable for any damages
   - Use at your own risk

5. **Termination**
   - License is automatically terminated if terms are violated
   - Violators must immediately cease all use
   - Legal action may be taken against violators

#### Violation Consequences

Violation of this license will result in:
- Immediate license termination
- Legal action
- Permanent ban from support
- Public disclosure of violation

**⚠️ BY USING THIS SOFTWARE, YOU AGREE TO THESE TERMS ⚠️**

For full license text, see [LICENSE](./LICENSE) file.

---

## 👨‍💻 Developer

### About the Developer

**BLUEBOT-X** is developed and maintained by **mudau_t**.

#### Developer Information

- 👤 **Name**: mudau_t
- 🌍 **Location**: South Africa
- 📱 **Contact**: +27747815326
- 💼 **Role**: Lead Developer & Creator
- 🎯 **Expertise**: Bot Development, WhatsApp Automation

#### Connect with Developer

- 📧 **Email**: mudau_t@developer.com
- 🐙 **GitHub**: github.com/mudau_t
- 💬 **Discord**: mudau_t#0000
- 📱 **WhatsApp**: +27747815326

#### Contributions

This project is the sole work of mudau_t. Contributions, modifications, or pull requests are **NOT ACCEPTED** as per the license agreement.

#### Credits

- **Developer**: mudau_t
- **Framework**: Baileys (WhatsApp Web API)
- **Runtime**: Node.js
- **Language**: JavaScript (ES6+)

---

## ⚠️ Disclaimer

### Important Notices

1. **Unofficial Software**
   - BLUEBOT-X is not affiliated with WhatsApp Inc.
   - This is an unofficial third-party bot
   - Use at your own risk

2. **Terms of Service**
   - Using bots may violate WhatsApp Terms of Service
   - Your account could be banned by WhatsApp
   - The developer is not responsible for account bans

3. **Privacy**
   - Bot has access to messages and group data
   - Ensure you trust the bot deployment
   - Review privacy implications before use

4. **Security**
   - Keep your session files secure
   - Never share session credentials
   - Use strong passwords for server access

5. **Legal**
   - Comply with local laws and regulations
   - Respect user privacy and data protection laws
   - Use responsibly and ethically

6. **Warranty**
   - No warranty or guarantee provided
   - Software provided "AS IS"
   - Developer not liable for damages or losses

7. **Support**
   - Support is provided on best-effort basis
   - No guaranteed response times
   - Support may be discontinued at any time

### Responsible Use

Please use BLUEBOT-X responsibly:
- ✅ Respect user privacy
- ✅ Follow group rules
- ✅ Comply with laws
- ✅ Use ethical practices
- ❌ Don't spam
- ❌ Don't harass users
- ❌ Don't violate terms
- ❌ Don't abuse features

---

## 🎉 Acknowledgments

Special thanks to:
- **Baileys** - WhatsApp Web API library
- **Node.js** - JavaScript runtime
- **WhatsApp** - Messaging platform
- **Open Source Community** - For tools and libraries

---

## 📊 Statistics

- **Total Commands**: 205+
- **Categories**: 7
- **Lines of Code**: 10,000+
- **Development Time**: 6+ months
- **Version**: 2.0.0
- **Release Date**: 2024

---

## 🔄 Version History

### v2.0.0 (Current)
- ✅ 205+ commands
- ✅ Pairing code authentication
- ✅ Advanced session management
- ✅ Multi-tier permissions
- ✅ Comprehensive documentation

### v1.0.0
- Initial release
- Basic commands
- QR code authentication

---

## 🚀 Future Plans

- 📱 Mobile app for bot management
- 🌐 Web dashboard
- 🤖 AI integration
- 📊 Advanced analytics
- 🔌 Plugin system
- 🌍 Multi-language support

---

## 📞 Contact

For any inquiries, support, or feedback:

**Developer**: mudau_t
**WhatsApp**: +27747815326
**Email**: support@bluebot.com

---

<div align="center">

### ⚠️ REMEMBER: MODIFICATION IS STRICTLY PROHIBITED ⚠️

**Made with ❤️ by mudau_t**

**© 2024 BLUEBOT-X. All Rights Reserved.**

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/mudau_t/BLUEBOT-X)
[![License](https://img.shields.io/badge/license-Custom-red.svg)](./LICENSE)
[![Developer](https://img.shields.io/badge/developer-mudau__t-orange.svg)](https://github.com/mudau_t)

</div>
