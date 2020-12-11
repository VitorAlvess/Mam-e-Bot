const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const token = require('./config.js')// const token = 'NzgxOTM3MDAzODgxMDM3ODY0.X8E5lQ.-qtpRvvvivKHGaNc4sGQglMODKM'
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

const palavras = [
    'sexo',
    'acompanhantes',
    'sex',
    'sexshop',
    'eróticos',
    'porno',
    'garotas de',
    'de programa',
    'sexy',
    'anal',
    'gay',
    'eroticos',
    'swing',
    'fotos amadoras',
    'xxx',
    'fantasias sexuais',
    'bucetas',
    'travestis',
    'bundas',
    'erótico',
    'erosmania',
    'putaria',
    'ninfetas',
    'pornô',
    'fetish',
    'vibradores',
    'videos amadores',
    'vídeos amadores',
    'boquetes',
    'bizarro',
    'garota de',
    'coroas',
    'gays',
    'oral',
    'penis',
    'sexyshop',
    'travesti',
    'pênis',
    'sexual',
    'fotos caseiras',
    'videos caseiros',
    'vídeos caseiros',
    'video caseiro',
    'vídeo caseiro',
    'menage',
    'hentai',
    'calcinhas',
    'nuas',
    'pornos',
    'erotico',
    'prostitutas',
    'erótica',
    'lesbicas',
    'sexualidade',
    'peniano',
    'escort',
    'porn',
    'fetiche',
    'eróticas',
    'eroticas',
    'sexuais',
    'erotic',
    'gls',
    'grupal',
    'playboy',
    'sex-shop',
    'lésbicas',
    'adult',
    'putas',
    'peniana',
    'swingers',
    'zoofilia',
    'toys',
    'transex',
    'escorts',
    'safadas',
    'peladas',
    'calcinha',
    'peitos',
    'vibrador',
    'sado',
    'impotencia',
    'eretil',
    'buceta',
    'pornografia',
    'erotica',
    'brasileirinhas',
    'orgias',
    'transando',
    'relax',
    'pornôs',
    'sadomasoquismo',
    'vaginas',
    'eróticos',
    'boquete',
    'bunda',
    'erotismo',
    'puta',
    'hardcore',
    'glbt',
    'bissexuais',
    'ejaculação',
    'gozadas',
    'scort',
    'massagistas',
    'fetiches',
    'lolitas',
    'suruba',
    'amateur',
    'sexxxy',
    'hentais',
    'shemale',
    'surubas',
    'fudendo',
    'lgbt',
    'masturbadores',
    'explí­cito',
    'foda',
    'swings',
    'orgia',
    'sacanagem',
    'pompoarismo',
    'sexshops',
    'sextoy',
    'voyeur',
    'penianas',
    'ninfetinhas',
    'prostituta',
    'punheta',
    'podolatria',
    'lesbian',
    'impotência',
    'masturbador',
    'playboys',
    'kamasutra',
    'nudismo',
    'orgasmos',
    'prostituas',
    'sacanas',
    'fuck',
    'executivovip',
    'orgasmo',
    'transexuais',
    'sextoys',
    'transsexual',
    'excitantes',
    'hugecock',
    'bizarre',
    'fisting',
    'peituda',
    'sexyclube',
    'gsexy',
    'explicito',
    'sexsites',
    'pelada',
    'incestos',
    'erotika',
    'viadinho',
    'ejaculacao',
    'ninfeta',
    'sadomaso',
    'transas',
    'rabudas',
    'lésbica',
    'traveco',
    'voyerismo',
    'safada',
    'bacanal',
    'sexshoping',
    'penianos',
    'vibro',
    'homossexual',
    'pelado',
    'pirocas',
    'piroca',
    'gostozudas',
    'vagina',
    'putinha',
    'bundudas',
    'tarada',
    'pausudas',
    'travecos',
    'trepadas',
    'sexboys',
    'piriguetes',
    'tele-sexo',
    'sexxy',
    'megasex',
    'sexologista',
    'tesudas',
    'tesuda',
    'homossexualidade',
    'pompoarista',
    'gay/gls',
    'pussy',
    'travetis',
    'sado-maso',
    'scorts',
    'chupando',
    'peitudas',
    'sado-mazoquismo',
    'pompoar',
    'shemales',
    'menages',
    'zoofilias',
    'sadomasoquismos',
    'incesto',
    'masoquismo',
    'gozada',
    'transexual',
    'crossdresser',
    'metendo',
    'arrombadas',
    'erosguide',
    'sexys',
    'swingueira',
    'vaginal',
    'fogosas',
    'cacete',
    'chupou',
    'bi-sexual',
    'cuzinhos',
    'pornográfico',
    'pica',
    'bucetinha',
    'cuzinho',
    'topsexy',
    'orgasm',
    'travecas',
    'trepada',
    'xupaxota',
    'sexgatas',
    'pornstars',
    'chupada',
    'cuzao',
    'lesbias',
    'sadismo',
    'vibros',
    'sexx',
    'sotravesti',
    'transesex',
    'bucetinhas',
    'tgatas',
    'voyeurs',
    'sexxxyclub',
    't-girls',
    'pornografia',
    'bissexuais',
    'pornografico',
    'zooofilia',
    'fetichista',
    'sadomasoquista',
    'sadomazoquismo',
    'lolitos',
    'safados',
    'safado',
    'vaginismo',
    'transa',
    'lesbofetiche',
    'libidos',
    'vagabunda',
    'boquetes',
    'bissexual',
    'transgênero',
    'bucetonas',
    'fetixe',
    'upskirt',
    'rabuda',
    'clitóris',
    'clitoris',
    'enrabadas',
    'voyeurismo',
    'encoxada',
    'tranny',
    'masturbação',
    'tgatas',
    'sexxyshop',
    'fetiches',
    'kamassutra',
    'belladona',
    'buttman',
    'greludas',
    'pussy',
    'siririca',
    'fodendo',
    'xoxota',
    'xoxotas',
    'sex shop',
    'chupadas'];
client.on('message', msg => {

    //Mandar mensagem de dormir por causa do horario
    var now = new Date
    var horario = now.getHours() + ':' + now.getMinutes()
    if (horario == '1:0' & repetirmensagemhorario == 0){
        msg.reply('Já é tarde, é hora de você sair do discord e ir dormir. ')
        repetirmensagemhorario = 1
    }
    if (msg.content.toLowerCase() == '!anime'){
        msg.reply('')
       
        console.log(anime)
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