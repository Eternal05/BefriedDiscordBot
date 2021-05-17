//const {Client, Attachment} = require('discord.js');

const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');
//const Discord = require(discord.js);
//const bot = new Client();
//Requiers bot to communicate with the discord servers
const token = 'redacted';
//the token logs in the bot for the commands
const Prefix = '!';
//Makes all command prefixes !
bot.on('ready', () =>{
    console.log('this bot is online!');
})
//Turns on the bot and then notifies the user

//COMMANDS WITH THE PREFIX !
bot.on('message', msg=>{
    let args = msg.content.substring(Prefix.length).split(" ");
    if (!msg.content.startsWith(Prefix) || msg.author.bot) return;
        switch(args[0]){
        case 'mom':
        const mom0 = new Discord.MessageEmbed()
        .setColor('#ebecf0')
        .setTitle('I saw ur mom last night')
        .setImage('https://lh3.googleusercontent.com/proxy/OYhYwHbQ13X9cSHKqXL74tj5AP2Fnm9kPHYJEQUgHTlzYpba2SvFZ7fc7tCIa2wYR-XGwWGLC5D8eOXU9648PD1Rv0Qw61PI')
        msg.channel.send(mom0)
        break;
        
    }
   //creats a message if the usedr types in a command with the prefix !
})

bot.on('message', msg=>{
  if(msg.content.includes('kick')){
      const dick0 = new Discord.MessageEmbed()
      .setColor('#ebecf0')
      .setTitle('Congratulations!')
      .setImage('https://i.imgur.com/GBShWBD.jpg')
      msg.reply(dick0)
      //msg.channel.send(dick0)
      //break;
  }

})

bot.on('message', msg=>{
  let args = msg.content.substring(Prefix.length).split(" ");
  if (!msg.content.startsWith(Prefix) || msg.author.bot) return;
      switch(args[0]){
      case 'shoes':
      const fast0 = new Discord.MessageEmbed()
      .setColor('#ebecf0')
      .setTitle('I havent been happy in a long time')
      .setImage('https://cdn.discordapp.com/attachments/687849929263415390/732813827573547095/unknown.png')
      msg.channel.send(fast0)
      break;
      
  }
})


bot.on('message', msg=>{
    let args = msg.content.substring(Prefix.length).split(" ");
    if (!msg.content.startsWith(Prefix) || msg.author.bot) return;
        switch(args[0]){
        case 'fast':
        const fast0 = new Discord.MessageEmbed()
        .setColor('#ebecf0')
        .setTitle('RUNING IN THE 90S')
        .setImage('https://i.redd.it/chr7o6fyud7y.jpg')
        msg.channel.send(fast0)
        break;
        
    }
})

bot.on('message', msg=>{
    let args = msg.content.substring(Prefix.length).split(" ");
    if (!msg.content.startsWith(Prefix) || msg.author.bot) return;
        switch(args[0]){
        case 'sin':
        const sin0 = new Discord.MessageEmbed()
        .setColor('#ebecf0')
        .setTitle('I know what you’ve done.')
        .setImage('https://i.pinimg.com/236x/2e/a9/28/2ea9285545760981cfaac6689f8669eb--colors-gif.jpg')
        msg.channel.send(sin0)
        break;
        
    }
})

bot.on('message', msg=>{
    let args = msg.content.substring(Prefix.length).split(" ");
    if (!msg.content.startsWith(Prefix) || msg.author.bot) return;
        switch(args[0]){
        case 'mistake':
        
        num = (Math.round((Math.random() * 19) + 1));
        //msg.channel.send(num);
        if (num == 1) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Goth GF')
            .setImage('https://i.imgur.com/59dHe4m.png')
            )
         }
         else if (num == 2) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Best anime protag')
            .setImage('https://i.imgur.com/C3MTudT.png')
            )
          }
         else if (num == 3) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Its not a phase mom!')
            .setImage('https://i.imgur.com/s1yumwG.png')
            )
          }
          else if (num == 4) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('DICtionary')
            .setImage('https://i.imgur.com/izAhbBs.png')
            )
          }
          else if (num == 5) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('POGGERS')
            .setImage('https://i.imgur.com/dg8IhH4.png')
            )
          }
          else if (num == 7) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('What dreams are made of')
            .setImage('https://i.imgur.com/z4fNeWn.jpg')
            )
          }
          else if (num == 8) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('There are no accidents')
            .setImage('https://i.imgur.com/mm6GUK2.png')
            )
          }
          else if (num == 9) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Best Girl')
            .setImage('https://i.imgur.com/NUrRCKn.png')
            )
          }
          else if (num == 10) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('The men betraying each other')
            .setImage('https://i.imgur.com/h6Maoj1.png')
            )
          }
          else if (num == 11) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Selfie from I Phone fromt camera')
            .setImage('https://i.imgur.com/QvhB1Lj.png')
            )
          }
          else if (num == 12) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Nicole will murder me in my sleep')
            .setImage('https://i.imgur.com/UoNITls.png')
            )
          }
          else if (num == 13) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Hammond is a liberal')
            .setImage('https://i.imgur.com/rwhg2sO.jpg')
            )
          }
          else if (num == 14) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Wholesome')
            .setImage('https://i.imgur.com/i1dUs2T.png')
            )
          }
          else if (num == 15) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Marshall is a Weeb UWU')
            .setImage('https://i.imgur.com/ZfrZAnB.png')
            )
          }
          else if (num == 16) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Marshalls best photoshop')
            .setImage('https://i.imgur.com/xpveY7T.png')
            )
          }
          else if (num == 17) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('True Genocide Route')
            .setImage('https://i.imgur.com/GrGszTT.png')
            )
          }
          else if (num == 18) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Hammond is finnaly on board with the liberals')
            .setImage('https://cdn.discordapp.com/attachments/687849929263415390/743308907518361671/hammond_boy.png')
            )
          }
         else {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('boots and cats')
            .setImage('https://cdn.discordapp.com/attachments/681915111530823883/707087896384897064/mm.png')
            )
          }
        break;
        
    }
})

bot.on('message', msg=>{
    let args = msg.content.substring(Prefix.length).split(" ");
    if (!msg.content.startsWith(Prefix) || msg.author.bot) return;
        switch(args[0]){
        case 'roblox':
        
        num = (Math.round((Math.random() * 10) + 1));
        //msg.channel.send(num);
        if (num == 1) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Yes Daddy.')
            .setImage('https://i.imgur.com/jlhbLYF.png')
            )
         }
         else if (num == 2) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('What an unfortunate place for a hole. - Nicole(2020)')
            .setImage('https://i.imgur.com/cqjymSQ.png')
            )
          }
         else if (num == 3) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('My totally real Anime GF')
            .setImage('https://i.imgur.com/nOAvwbI.png')
            )
          }
         else if (num == 4) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Its good to share!')
            .setImage('https://i.imgur.com/YvFwl2E.png')
            )
          }
         else if (num == 5) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Youve got a skelington insif opf uou wanhat anosither one')
            .setImage('https://i.imgur.com/CvTHguU.png')
            )
          }
         else if (num == 6) {
             msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Sans says furries should be eradicated.')
            .setImage('https://i.imgur.com/cdf1jaz.png')
            )
          }
         else if (num == 7) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('How do you do fellow kids?')
            .setImage('https://i.imgur.com/nv7uQdi.png')
            )
          }
         else if (num == 8) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('squidward')
            .setImage('https://i.imgur.com/ID05aj2.png')
            )
          }
         else if (num == 9) {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('Boy scout summer camp')
            .setImage('https://i.imgur.com/X298fVe.png')
            )
          }
         else {
            msg.channel.send(
            new Discord.MessageEmbed()
            .setColor('#ebecf0')
            .setTitle('This is a school')
            .setImage('https://i.imgur.com/7VReWfk.png')
            )
          }
        break;
        
    }
})

//SANS REPLY'S TO A WORD
bot.on('message', msg=>{
    if(msg.content.includes('anime')){
        msg.reply('No Anime!');
    }
    //Looks for a certian word "anime" and then responds with No Anime!
})


bot.on('message', msg=>{
    if(msg.content.includes('swear')){
        msg.reply('No swearing');
    }

})

bot.on('message', msg=>{
  if(msg.content.includes('owo','OWO')){
      msg.reply('⠀⠀⠀⣠⣾⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣷⣄⠀');
      msg.reply('⠀⠀⠀⣿⣿⡇⠀⠀⢸⣿⢰⣿⡆⠀⣾⣿⡆⠀⣾⣷⠀⣿⣿⡇⠀⠀⢸⣿⣿⠀');
      msg.reply('⠀⠀⠀⣿⣿⡇⠀⠀⢸⣿⠘⣿⣿⣤⣿⣿⣿⣤⣿⡇⠀⢻⣿⡇⠀⠀⢸⣿⣿⠀');
      msg.reply('⠀⠀⠀⣿⣿⡇⠀⠀⢸⡿⠀⢹⣿⣿⣿⣿⣿⣿⣿⠁⠀⢸⣿⣇⠀⠀⢸⣿⣿⠀');
      msg.reply('⠀⠀⠀⠙⢿⣷⣶⣶⡿⠁⠀⠈⣿⣿⠟⠀⣿⣿⠇⠀⠀⠈⠻⣿⣿⣿⣿⡿⠋');
  }

})

bot.on('message', msg=>{
  if(msg.content.includes('uwu','UWU')){
      msg.reply('⠀⠀⠀⣿⣿⡆⠀⠀⢸⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⢸⣿⡇⠀⠀ ⣾⣿⡆');
      msg.reply('⠀⠀⠀⣿⣿⡇⠀⠀⢸⣿⢰⣿⡆⠀⣾⣿⡆⠀⣾⣷⠀⣿⣿⡇⠀⠀⢸⣿⣿⠀');
      msg.reply('⠀⠀⠀⣿⣿⡇⠀⠀⢸⣿⠘⣿⣿⣤⣿⣿⣿⣤⣿⡇⠀⢻⣿⡇⠀⠀⢸⣿⣿⠀');
      msg.reply('⠀⠀⠀⣿⣿⡇⠀⠀⢸⡿⠀⢹⣿⣿⣿⣿⣿⣿⣿⠁⠀⢸⣿⣇⠀⠀⢸⣿⣿⠀');
      msg.reply('⠀⠀⠀⠙⢿⣷⣶⣶⡿⠁⠀⠈⣿⣿⠟⠀⣿⣿⠇⠀⠀⠈⠻⣿⣿⣿⣿⡿⠋');
  }

})

bot.on('message', msg=>{
    if(msg.content.includes('poggers')){
        msg.reply("POGGERS UWU");
    }
})

bot.on('message', msg=>{
    if(msg.content.includes('baka')){
        msg.reply("I will have none of this Anime in my good christian discord server!");
    }
})

bot.on('message', msg=>{
    if(msg.content.includes('pog')){
        msg.reply("POGGERS UWU");
    }
})

bot.on('message', msg=>{
    if(msg.content.includes('i love you')){
        msg.reply("NO YOWOU");
    }
})

bot.on('message', msg=>{
    if(msg.content.includes('weeb')){
        msg.channel.send('Oh you mean ' + '<@306561489328668672>');
    }
})

bot.on('message', msg=>{
    if(msg.content.includes('dummy')){
        msg.channel.send('Oh you mean ' + '<@148571831522164736>');
    }
})


bot.login(token);
//Logs in the bot
//ctrl + ` opens console