# BLUEBOT-X Usage Guide

## Getting Started

### First Steps

After installation and pairing, send these commands to verify the bot is working:

```
.ping        - Check bot response time
.alive       - Check bot status
.menu        - View all commands
```

## Command Structure

All commands follow this format:

```
[PREFIX][COMMAND] [ARGUMENTS]
```

- **PREFIX**: Default is `.` (can be changed)
- **COMMAND**: The command name
- **ARGUMENTS**: Optional parameters

### Examples

```
.ping
.menu general
.tagall Hello everyone!
.kick @user
```

## Menu System

### View All Commands

```
.menu
```

This shows all categories and command counts.

### View Category Commands

```
.menu general     - General commands
.menu group       - Group commands
.menu admin       - Admin commands
.menu owner       - Owner commands
.menu mods        - Moderator commands
.menu fun         - Fun commands
.menu dev         - Developer commands
```

## Permission Levels

### 👑 Owner
- Full bot access
- All commands available
- Set in `OWNER_NUMBER`

### ⚡ Admin
- Group management
- User moderation
- Most commands
- Set in `ADMIN_NUMBERS`

### 🛡️ Moderator
- User moderation
- Content management
- Mod commands
- Set in `MOD_NUMBERS`

### 👥 User
- General commands
- Fun commands
- No admin access

## Common Commands

### Information Commands

```
.info           - Bot information
.owner          - Owner information
.runtime        - Bot uptime
.stats          - Bot statistics
.version        - Bot version
.alive          - Check if bot is alive
.ping           - Check response time
```

### Group Management

```
.tagall [msg]   - Tag all members
.hidetag [msg]  - Hidden tag
.groupinfo      - Group information
.grouplink      - Get group invite link
.admins         - List group admins
.groupstats     - Group statistics
```

### Moderation (Admin Only)

```
.kick @user     - Kick member
.add [number]   - Add member
.promote @user  - Make admin
.demote @user   - Remove admin
.warn @user     - Warn user
.ban @user      - Ban user
.mute           - Mute group
.unmute         - Unmute group
```

### Fun Commands

```
.dice           - Roll dice
.coinflip       - Flip coin
.8ball [q]      - Magic 8 ball
.joke           - Random joke
.meme           - Random meme
.quote          - Random quote
.ship @u1 @u2   - Ship users
.rate [thing]   - Rate something
```

### Utility Commands

```
.weather [city] - Weather info
.time [zone]    - Current time
.calculator [x] - Calculate
.translate      - Translate text
.qr [text]      - Generate QR code
.short [url]    - Shorten URL
```

## Group Commands

### Basic Group Management

#### Get Group Link
```
.grouplink
```

#### Reset Group Link
```
.resetlink
```

#### Set Group Name
```
.groupname New Group Name
```

#### Set Group Description
```
.groupdesc This is our group description
```

### Member Management

#### Tag All Members
```
.tagall Important announcement!
```

#### Hidden Tag
```
.hidetag Secret message
```

#### Kick Member
```
.kick @user
```

#### Add Member
```
.add 27123456789
```

### Admin Management

#### Promote to Admin
```
.promote @user
```

#### Demote from Admin
```
.demote @user
```

#### List Admins
```
.admins
```

### Group Settings

#### Announcement Mode
```
.announce on    - Only admins can send
.announce off   - Everyone can send
```

#### Welcome Messages
```
.welcome on     - Enable welcome
.welcome off    - Disable welcome
```

#### Anti-link
```
.antilink on    - Enable anti-link
.antilink off   - Disable anti-link
```

## Admin Commands

### User Moderation

#### Warning System
```
.warn @user [reason]    - Warn user
.unwarn @user           - Remove warning
.warnings @user         - View warnings
```

#### Ban System
```
.ban @user              - Ban user
.unban @user            - Unban user
.banlist                - List banned users
```

#### Message Management
```
.delete                 - Delete message (reply)
.clear 10               - Clear 10 messages
```

### Bot Settings

#### Change Prefix
```
.setprefix !
```

#### Set Welcome Message
```
.setwelcome Welcome {user} to {group}!
```

#### Set Goodbye Message
```
.setgoodbye Goodbye {user}!
```

### Filters

#### Add Word Filter
```
.filter badword
```

#### Remove Filter
```
.unfilter badword
```

#### List Filters
```
.filters
```

## Owner Commands

### Broadcasting

#### Broadcast to All
```
.broadcast Important announcement!
```

#### Broadcast to Groups
```
.broadcastgc Group announcement!
```

### Bot Management

#### Restart Bot
```
.restart
```

#### Shutdown Bot
```
.shutdown
```

#### Update Bot
```
.update
```

### User Management

#### Add Admin
```
.addadmin 27123456789
```

#### Remove Admin
```
.removeadmin 27123456789
```

#### Add Moderator
```
.addmod 27123456789
```

#### Remove Moderator
```
.removemod 27123456789
```

#### Block User
```
.block @user
```

#### Unblock User
```
.unblock @user
```

### Bot Settings

#### Set Bot Name
```
.setbotname MyBot
```

#### Set Bot Mode
```
.setmode public     - Public mode
.setmode private    - Private mode
```

#### Maintenance Mode
```
.maintenance on     - Enable maintenance
.maintenance off    - Disable maintenance
```

## Moderator Commands

### User Management

#### Mute User
```
.muteuser @user
```

#### Unmute User
```
.unmuteuser @user
```

#### Approve User
```
.approve @user
```

#### Verify User
```
.verify @user
```

### Group Management

#### Lockdown
```
.lockdown           - Enable lockdown
.unlockdown         - Disable lockdown
```

#### Slowmode
```
.slowmode 10        - 10 second delay
.slowmode off       - Disable slowmode
```

### Notes System

#### Add Note
```
.note rules Please follow group rules
```

#### Delete Note
```
.delnote rules
```

#### List Notes
```
.notes
```

#### View Rules
```
.rules
```

## Fun Commands

### Games

#### Dice
```
.dice
```

#### Coin Flip
```
.coinflip
```

#### Rock Paper Scissors
```
.rps rock
.rps paper
.rps scissors
```

#### Slot Machine
```
.slot
```

### Interactive

#### Magic 8 Ball
```
.8ball Will I be rich?
```

#### Truth or Dare
```
.truth
.dare
```

#### Would You Rather
```
.wyr
```

### Rating

#### Ship Users
```
.ship @user1 @user2
```

#### Rate Something
```
.rate pizza
```

#### IQ Test
```
.iq @user
```

#### Gay Rate
```
.gay @user
```

### Actions

#### Slap
```
.slap @user
```

#### Hug
```
.hug @user
```

#### Kiss
```
.kiss @user
```

#### Pat
```
.pat @user
```

## Developer Commands

### Code Execution

#### Evaluate Code
```
.eval console.log('Hello')
```

#### Execute Shell
```
.shell ls -la
```

### Debugging

#### View Logs
```
.logs
```

#### Clear Logs
```
.clearlogs
```

#### Debug Mode
```
.debug on
.debug off
```

### Performance

#### Memory Usage
```
.memory
```

#### CPU Usage
```
.cpu
```

#### Performance Stats
```
.performance
```

### Command Management

#### Reload Command
```
.reload ping
```

#### Reload All Commands
```
.reloadall
```

## Tips and Tricks

### 1. Use Aliases

Many commands have aliases:
```
.menu = .help = .commands
.ping = .speed = .latency
.alive = .status = .online
```

### 2. Reply to Messages

Some commands work with replies:
```
.delete         - Reply to message to delete
.groupdp        - Reply to image to set as group icon
```

### 3. Mention Users

Use @ to mention users:
```
.kick @user
.promote @user
.ship @user1 @user2
```

### 4. Check Permissions

Before using admin commands, ensure:
- You have the required permission level
- Bot is admin (for group commands)
- Command is used in correct context (group/private)

### 5. Get Help

For any command:
```
.menu [category]
```

## Best Practices

### For Group Admins

1. **Set clear rules**
   ```
   .setrules 1. Be respectful 2. No spam 3. No NSFW
   ```

2. **Configure welcome messages**
   ```
   .setwelcome Welcome {user}! Please read .rules
   ```

3. **Enable anti-link if needed**
   ```
   .antilink on
   ```

4. **Use warning system**
   ```
   .warn @user Spamming
   ```

### For Bot Owners

1. **Set proper permissions**
   - Add trusted admins
   - Add moderators
   - Review permissions regularly

2. **Configure bot settings**
   - Set appropriate prefix
   - Configure auto-read
   - Set timezone

3. **Monitor bot**
   - Check logs regularly
   - Monitor performance
   - Update when needed

4. **Backup data**
   ```
   .backup
   ```

### For Users

1. **Use correct prefix**
   - Default is `.`
   - Check with group admin

2. **Don't spam commands**
   - Wait for responses
   - Use commands appropriately

3. **Report issues**
   ```
   .report Bug description
   ```

4. **Give feedback**
   ```
   .feedback Suggestion
   ```

## Troubleshooting

### Command Not Working

1. Check prefix is correct
2. Verify command spelling
3. Ensure you have permissions
4. Check if bot is admin (group commands)

### Bot Not Responding

1. Check bot is online: `.alive`
2. Check internet connection
3. Verify bot has permissions
4. Contact owner: `.owner`

### Permission Denied

1. Check your permission level
2. Verify command requirements
3. Contact admin/owner

### Group Commands Failing

1. Ensure bot is group admin
2. Check if you're group admin
3. Verify command syntax

## Support

### Getting Help

```
.support        - Support information
.owner          - Contact owner
.report [msg]   - Report bug
.feedback [msg] - Send feedback
```

### Contact

- **WhatsApp**: +27747815326
- **Email**: support@bluebot.com
- **Developer**: mudau_t

---

**⚠️ MODIFICATION IS STRICTLY PROHIBITED ⚠️**

© 2024 mudau_t. All Rights Reserved.
