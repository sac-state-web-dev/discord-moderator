module.exports = {
	name: 'meeting',
	description: 'Returns the day, hour and location of general meetings.',
	cooldown: 5,
	execute(message, args) {
		if (args[0] === 'meeting') {
			return message.channel.reply(
				'${message.author} Meeting times are every Friday at 3pm in Mendocino Hall 1032.'
			);
		}
	}
};
