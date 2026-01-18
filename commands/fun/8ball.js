/**
 * 8ball Command
 * Category: Fun
 * Developer: mudau_t
 */

export default {
  name: '8ball',
  aliases: ['eightball'],
  category: 'fun',
  description: 'Magic 8 ball',
  usage: '.8ball [question]',
  
  async execute({ sock, msg, from, sender, args, reply, isGroup, isOwner, isAdmin, isMod, isGroupAdmin, isBotGroupAdmin }) {
    const responses = [
      'Yes', 'No', 'Maybe', 'Definitely', 'Absolutely not',
      'Ask again later', 'Cannot predict now', 'Very doubtful',
      'It is certain', 'Without a doubt', 'Most likely'
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    await reply(`🎱 *Magic 8 Ball says:* ${response}`);
  }
};
