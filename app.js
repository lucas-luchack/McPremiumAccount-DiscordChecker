/*
    @document   : app.js
    @author     : Luc'HACK <luchack@valbion.com>
    @version    : 1.0.0
    @copyright  : 2020, Luc'HACK
    @license    : GNU General Public License v3.0
    @repository : https://github.com/lucas-luchack/McPremiumAccout-DiscordChecker
    @description: A bot for Discord that allows to check if the player has a Minecraft Premium account.
*/

const Discord = require('discord.js');
var request = require('request');
const { Client, MessageEmbed } = require('discord.js');
const config = require('./config.json')

const bot = new Discord.Client();


bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`);
    if (config.debug===true){
      bot.user.setPresence({status: 'dnd'});
      bot.user.setActivity('Debug Mode - Do not use!', { type: 'WATCHING' })
    } else {
      bot.user.setPresence({status: 'online'});
      bot.user.setActivity('Hello! Use > ' + config.prefix, { type: 'WATCHING' })
    }
});

var prefix = config.prefix;

bot.on("message", message => {

  if (message.content === "?ping"){
    console.log("Ping effectué");
    message.channel.send("Pinging ...")
			.then((msg) => {
				msg.edit("Pong ! 🏓" + '`' + (Date.now() - msg.createdTimestamp) + 'ms`')
			});
  };

  if (message.content.startsWith(prefix)) {
    var pseudo = message.content.split(" ").slice(1).join(" ");
    var url = 'https://playerdb.co/api/player/minecraft/' + pseudo
    request(url, function(err, response, body) {
      body = JSON.parse(body);
      message.delete(message.author);
      if (config.debug===true){
        console.log('Pseudo: ' + pseudo);
        console.log('Url: ' + url);
        console.log('User: ' + message.author.tag + " (" + message.author.id + ")")
        console.log('At: ' + Date.now())
        console.log('Ping: ' + (Date.now() - message.createdTimestamp) + 'ms')
      }
      if(body.code=="player.found"){
        console.log(message.author.tag + " (" + message.author.id + ")" + " - Validation réussi");
        const embedUser = new MessageEmbed()
          .setColor(config.SuccessColor)
          .setFooter('Votre comtpe à été trouvé ! La validation à réussi.', 'https://minotar.net/avatar/' + pseudo)
        message.channel.send(embedUser).then(msg => {msg.delete({ timeout: 10000 })}).catch(console.error);
        message.member.roles.remove(config.IDRoleCracked);
        message.member.roles.add(config.IDRolePremium);
        message.member.setNickname(pseudo);
        if (config.Webhook.id!=null){
          const hook = new Discord.WebhookClient(config.Webhook.id, config.Webhook.token);
          const embedLogs = new MessageEmbed()
            .setColor(config.SuccessColor)
            .setTitle('Account Verification')
            .setThumbnail('https://minotar.net/avatar/' + pseudo)
            .setDescription('La vérification a été effectuée avec succés. Le profil est approuvé.\nUtilisateur : ' + message.author.tag + '\nCompte à vérifier : ' + pseudo)
            .setTimestamp(Date.now())
          hook.send(embedLogs);
        }
      } else {
        console.log(message.author.tag + " (" + message.author.id + ")" + " - Validation échouée");
        const embedUser = new MessageEmbed()
          .setColor(config.DangerColor)
          .setFooter("vous n'avez pas de compte Minecraft Premium ! La validation à échouée.", config.ErrorIcon)
        message.channel.send(embedUser).then(msg => {msg.delete({ timeout: 10000 })}).catch(console.error);
        if (config.Webhook.id!=null){
          const hook = new Discord.WebhookClient(config.Webhook.id, config.Webhook.token);
          const embedLogs = new MessageEmbed()
            .setColor(config.DangerColor)
            .setTitle('Account Verification')
            .setThumbnail(config.ErrorIcon)
            .setDescription('La vérification a échouée.\nUtilisateur : ' + message.author.tag + '\nCompte à vérifier : ' + pseudo)
            .setTimestamp(Date.now())
          hook.send(embedLogs);
        }
      }
  });
};

})
bot.login(config.token);