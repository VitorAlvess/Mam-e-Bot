bot.on('raw', async dados => {
    // if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return;
    // if(dados.d.message_id != "783368730464878604") return;

    // let servidor = bot.guilds.get("765383156953120778")
    // let membro = servidor.members.get(dados.d.user_id);
    // let cargo1 = servidor.roles.get('783371672190713916')
    // let cargo2 = servidor.roles.get('783371771738980392')
    //
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "783368730464878604") return

    let servidor = bot.guilds.get('765383156953120778')
    let membro = servidor.members.get(dados.d.user_id)

    let cargo1 = servidor.roles.get('783371672190713916'),
        cargo2 = servidor.roles.get('783371771738980392')



    //
    if(dados.t === 'MESSAGE_REACTION_ADD'){
        if(dados.d.emoji.name === '😄'){
            if(membro.roles.has(cargo1)) return
            membro.addRole(cargo1)
        } 
        else if(dados.d.emoji.name === '😠'){
            if(membro.roles.has(cargo2)) return
            membro.addRole(cargo2)
        }
    }
    //remove
    if(dados.t === 'MESSAGE_REACTION_REMOVE'){
        if(dados.d.emoji.name === '😄'){
            if(membro.roles.has(cargo1)) return
            membro.removeRole(cargo1)
        } 
        else if(dados.d.emoji.name === '😠'){
            if(membro.roles.has(cargo2)) return
            membro.removeRole(cargo2)
        }
    }
})
//