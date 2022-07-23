import { Message, MessageEmbed } from 'discord.js';
import config from './config';

const { prefix } = config;

const commands: { [name: string]: { aliases?: string[]; description: string; format: string } } = {
  'help': {
    description: 'Shows the list of commands and their details.',
    format: 'help'
  },
  'ping': {
    description: 'Checks connectivity with discord\'s servers.',
    format: 'ping'
  },
  'say': {
    aliases: ['repeat', 'echo'],
    description: 'Repeats whatever is said.',
    format: 'say <message>'
  },
  'qa': {
    description: 'qa',
    format: 'qa'
  },
  'rickroll': {
    description: 'rickroll',
    format: 'rickroll'
  },
  'test': {
  description: 'test',
    format: 'test'
  }
  }

export default function helpCommand(message: Message) {
  const footerText = message.author.tag;
  const footerIcon = message.author.displayAvatarURL();
  const embed = new MessageEmbed()
    .setTitle('COMMAND LIST')
    .setColor('WHITE')
    .setFooter({ text: footerText, iconURL: footerIcon });

  for (const commandName of Object.keys(commands)) {
    const command = commands[commandName];
    let desc = command.description + '\n\n';
    if (command.aliases) desc += `**Aliases :** ${command.aliases.join(', ')}\n\n`;
    /*
    desc += '**Format**\n```\n' + prefix + command.format + '```';
    */
    embed.addField(commandName, desc, false);
  }

  return embed;
}
