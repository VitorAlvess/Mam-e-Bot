const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client();
const token = require("./config.js"); //chave da api do discord
const token2 = require("./configapi2.js");  //chave da api de busca de imagem

const palavras = require("./palavras.js"); //Filtro de palavras
const request = require("request");
const invite = "https://discord.gg/HAhVwJYQaC";
const unirest = require("unirest");

// const express = require('express')
// const app = express()
// var repetirmensagemhorario = 0;
client.on("ready", () => {
  console.log("Bot Mãe On");
  client.user.setActivity(`Cuidando de alguns pestinhas (Crinças)`);

});


client.on("message", (msg) => {
  // https://appanimeplus.tk/api-animesbr-10.php?info=ID_DO_ANIME

  if (msg.content.toLowerCase() == "!animerandom") {
    try {
      let number = Math.floor(Math.random() * (2716 - 1)) + 1;
      request(
        `https://appanimeplus.tk/api-animesbr-10.php?info=${number}`,
        function (error, response, body) {
          console.log("error:", error);
          console.log("statusCode:", response && response.statusCode);
          let content = JSON.parse(body);
          try{
            var pesquisa = content[0].category_name
          }
        
          catch (err) {
            console.log(err);

            return  msg.channel.send("Algo deu errado, Tente novamente");
          }

          
          var texto = `**${pesquisa.toString()}**\n${content[0].category_description.toString()}\n\n${content[0].category_genres}`
          msg.channel.send("```" + texto + "```");
          var req = unirest(
            "GET",
            "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI"
          );

          req.query({
            q: pesquisa,
            pageNumber: "1",
            pageSize: "1",
            autoCorrect: "true",
          });

          req.headers({
            "x-rapidapi-key":
              token2, //API <
            "x-rapidapi-host":
              "contextualwebsearch-websearch-v1.p.rapidapi.com",
            useQueryString: true,
          });

          req.end(function (res) {
            
            // if (res.error) throw new Error(msg.channel.send("Aconteceu um erro, Tente Novamente"));
           
            try{
              console.log(res.body.value[0].url);
              msg.channel.send(res.body.value[0].url);
            }
            catch(err){
              console.log(err);
              msg.channel.send('Um erro ocorreu, Tente Novamente');
            }
          
          });
        }
      );
    } catch (err) {
      console.log(err);

      return msg.channel.send("Aconteceu um erro, Tente Novamente");
    }
  }
  if (msg.content.toLowerCase() == "!animestemporada") {
    request(
      "https://appanimeplus.tk/api-animesbr-10.php?latest",
      function (error, response, body) {
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
        let texto = "Animes em lançamento: 😄\n";
        let conteudo = JSON.parse(body);
        for (let index = 0; index < conteudo.length; index++) {
          texto += `${conteudo[index].title.toString()} \n`;
        }
        msg.channel.send("```" + texto + "```");
       
      }
    );
  }
  if (msg.content.toLowerCase() == "!help" || msg.content.toLowerCase() == '!comandos' ) {
    let comandos = `
    *Comandos*
    !link -> Envia o convite do servidor no seu privado
    !img -> Envia uma imagem aleatoria
    !animestemporada -> Mostra a lista de animes da temporada
    !animerandom -> Mostra um anime aleatorio
    `
    msg.reply("```" + comandos + "```");

  }
  if (msg.content.toLowerCase() == "!img") {
    let a = `https://source.unsplash.com/random/2000x2000?sig=${
      Math.random() * (5 - 1) + 1
    }`;
    msg.channel.send(a);
  }
  if (msg.content.toLowerCase() == "!link") {
    msg.reply("Foi enviado o convite no seu pv :wink:");
    msg.author.send(`Aqui esta o convite ${invite}`);
    //Reponder Bom dia, Boa Tarde, boa noite
  }
  if (msg.content.toLowerCase() === "bom dia") {
    msg.reply("bom dia ^-^");
  }
  if (msg.content.toLowerCase() === "boa tarde") {
    msg.reply("boa tarde ^-^");
    // msg.channel.send('Boa Boa') sapoha n tava funfando
  }
  if (msg.content.toLowerCase() === "boa noite") {
    msg.reply("boa noite ^-^");
  }

  //Filtro de mensagens
  var mensagem = msg.content.split(" ");
  for (let index = 0; index < mensagem.length; index++) {
    if (palavras.indexOf(mensagem[index]) != -1) {
      msg.reply("para de usar essas palavras feias");
    }
  }
  //////////////
});

// bot.on('message', msg => {
//     console.log(msg.content)
//     if (palavras.indexOf(msg.content) = 0){
//         msg.reply('Criança para de usar essas palavras feias')
//     }

// })
client.login(token);
