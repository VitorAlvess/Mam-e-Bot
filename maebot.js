const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const token = require('./config.js')
const palavras = require('./palavras.js');
const request = require('request');
const invite = "https://discord.gg/HAhVwJYQaC"
// const express = require('express')
// const app = express()
var repetirmensagemhorario = 0
client.on('ready', () => {
    console.log('Bot Mãe On')
    client.user.setActivity(`Cuidando de alguns pestinhas (Crinças)`)
    // var a = client.channels.get('765383157083930632')
    // console.log(a)
    // 765383157083930632
    // client.user.setGame("fala")
})
client.on("guildMemberAdd", member => {
    member.guild.channels.get('765383157083930629').send(member.user.username + 'Bem vindo!');
    console.log(member)
    member.send('Opa teste teste')
})
// client.on('raw', async dados => {

  
    
    
// })
//Add cargos por reação
// client.on('raw', async dados => {
    
//     if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
//     if(dados.d.message_id != "783368730464878604") return
    
    
//     let servidor = client.guilds.get("765383156953120778")
//     let membro = servidor.members.get(dados.d.user_id)

//     var cargo1 = servidor.roles.get('783371672190713916'),
//         cargo2 = servidor.roles.get('783371771738980392')
       

//     if(dados.t === "MESSAGE_REACTION_ADD"){
//         if(dados.d.emoji.name === "😄"){
//             if(membro.roles.has(cargo1)) return
//             membro.addRole(cargo1)
//             console.log('Cargo 1')
//         }else if(dados.d.emoji.name === "😠"){
//             if(membro.roles.has(cargo2)) return
//             membro.addRole(cargo2)
//             console.log('Cargo 2')
//         }
//     }
//     if(dados.t === "MESSAGE_REACTION_REMOVE"){
//         if(dados.d.emoji.name === "😄"){
//             if(membro.roles.has(cargo1)) return
//             membro.removeRole(cargo1)
//             console.log(' remove Cargo 1')
//         }else if(dados.d.emoji.name === "😠"){
//             if(membro.roles.has(cargo2)) return
//             membro.removeRole(cargo2)
//             console.log('remove Cargo 2')
//         }
//     }

// })


client.on('message', msg => {
    // https://appanimeplus.tk/api-animesbr-10.php?info=ID_DO_ANIME
    //Mandar mensagem de dormir por causa do horario
    var now = new Date
    var horario = now.getHours() + ':' + now.getMinutes()
    if (horario == '1:0' & repetirmensagemhorario == 0){
        msg.reply('Já é tarde, é hora de você sair do discord e ir dormir. ')
        repetirmensagemhorario = 1
    }
    if (msg.content.toLowerCase() == '!animerandom'){
        let number = Math.floor(Math.random() * (2716 - 1)) + 1;
        request(`https://appanimeplus.tk/api-animesbr-10.php?info=${number}`, function(error, response, body) {
            console.log('error:', error); 
            console.log('statusCode:', response && response.statusCode);
            let content = JSON.parse(body)
            msg.channel.send(`${content[0].category_name}`)
            



    })
}
    if (msg.content.toLowerCase() == '!anime'){
        request('https://appanimeplus.tk/api-animesbr-10.php?latest', function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode);
        let texto = 'Animes em lançamento: 😄\n'
        let conteudo = JSON.parse(body)
        for (let index = 0; index < conteudo.length; index++) {
            texto += `${conteudo[index].title.toString()} \n`
            
        }
        msg.channel.send("```" + texto + "```");
        //   console.log('body:', conteudo); // Print the HTML for the Google homepage.
        });
    }
    if (msg.content.toLowerCase() == '!img'){
        let a = `https://source.unsplash.com/random/2000x2000?sig=${Math.random() * (5 - 1) + 1}`
        msg.channel.send(a)
    }
    if (msg.content.toLowerCase() == "!link"){
        msg.reply('Foi enviado o convite no seu pv :wink:')
        msg.author.send(`Aqui esta o convite ${invite}`)
    //Reponder Bom dia, Boa Tarde, boa noite
    }
    if (msg.content.toLowerCase() === 'bom dia') {
        msg.reply('bom dia ^-^')  
    }
    if (msg.content.toLowerCase() === 'boa tarde') {       
        msg.reply('boa tarde ^-^')    
        // msg.channel.send('Boa Boa') sapoha n tava funfando
    }
    if (msg.content.toLowerCase() === 'boa noite') {
        msg.reply('boa noite ^-^')
    }

    //Filtro de mensagens
    var mensagem = msg.content.split(" ")
    for (let index = 0; index < mensagem.length; index++) {
        
        if (palavras.indexOf(mensagem[index]) != -1){
            msg.reply('para de usar essas palavras feias')
           
        }
        
    }
    //////////////
})

// bot.on('message', msg => {
//     console.log(msg.content)
//     if (palavras.indexOf(msg.content) = 0){
//         msg.reply('Criança para de usar essas palavras feias')
//     }

// })
client.login(token)