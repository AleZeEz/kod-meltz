
const dbd = require("dbd.js")
const bot = new dbd.Bot({
token: "NzYxOTM0NTQ2OTYxOTU2ODY1.X3h02A.u9GMozmdDxLiD-4zyjwiC9Rd5gw",
prefix: "$getServerVar[prefix]"
})


// variables
 
bot.variables({
    prefix: "%",
    grave: "`",
    grave1: "```",
    rola: "Nie ustawiono", 
    kanal: "Nie ustawiono",
    kolor: "2add15",
    partnership: "0",
    propozycje: "Nie ustawiono",
    gban: "0",
    gbanreason: " ",
    mute: "Nie ustawiono",
    // eco

    cash: "1000",
    bank: "100",

    // bumps

    totalbumps: "0",
    bpc: "10",

    //perms
    globalperms: "0",

    // welcomes 
    welcomeschannel: "Nie ustawiony",
    welcomesenabled: "false",
    welcomesdesc: "not set",
    whoid: " ",
    welcomesauthor: " ",

    // profiles 
    badges_dev: " ",
    badges_staff: " ",
    badges_bughunter: " ",
    badges_bughunter2: " ",
    badges_christmas: " ",
    profilopis: "Nie ustawiono! Zmien to uzywajac: `opis (twoj opis)`",
    instagram: "`Nie ustawiono`",
    youtube: "`Nie ustawiono`",
    github: "`Nie ustawiono`"    }) 

// status //

bot.status({
      text: "ServerHelper 1.2 | %help",
      type: "WATCHING",
      time: 45
})

bot.status({
      text: "https://www.serverhelper.ga/vote",
      type: "WATCHING",
      time: 45
})

bot.readyCommand({
    channel: "770005181307551775",
    code: "$title[Status] $description[**\`\`\`ONLINE\`\`\`**] $addTimestamp $color[2add15]"
    })

bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
code: command.code,
aliases: command.aliases,
nonPrefixed: command.nonPrefixed
})
} 
}

bot.command ({
    name: "<@!761934546961956865>",
	code: `$author[$username#$discriminator[$authorID];$authorAvatar]
    $title[]
    $description[Prefix na $getVar[grave]$serverName$getVar[grave] to $getVar[grave]$getServerVar[prefix]$getVar[grave]
    <:icon_invite:756955727435661394> *Dodaj bota!* [Kliknij\\](https://www.serverhelper.ga/dodaj)
    <:icon_follow:773182338708013086>  *Strona Bota* [Kliknij\\](https://www.serverhelper.ga)
    <:emote2:780071779813163049> *Ping:* $getVar[grave] $ping ms $getVar[grave]
    <:info:780071780236787722> *Uptime:* $getVar[grave] $uptime $getVar[grave]]
    $color[2add15]
    $thumbnail[https://cdn.discordapp.com/avatars/761934546961956865/f58c245c5b148b43f7e793ea67baecca.webp?size=256]
    $footer[$username[$authorID]#$discriminator[$authorID] || $authorID ||;$authorAvatar]
    $suppressErrors[:x:]`,
	nonPrefixed: true
})
bot.command ({
    name: "<@761934546961956865>",
	code: `$author[$username#$discriminator[$authorID];$authorAvatar]
    $title[]
    $description[Prefix na $getVar[grave]$serverName$getVar[grave] to $getVar[grave]$getServerVar[prefix]$getVar[grave]
    <:icon_invite:756955727435661394> *Dodaj bota!* [Kliknij\\](https://www.serverhelper.ga/dodaj)
    <:icon_follow:773182338708013086>  *Strona Bota* [Kliknij\\](https://www.serverhelper.ga)
    <:emote2:780071779813163049> *Ping:* $getVar[grave] $ping ms $getVar[grave]
    <:info:780071780236787722> *Uptime:* $getVar[grave] $uptime $getVar[grave]]
    $color[2add15]
    $thumbnail[https://cdn.discordapp.com/avatars/761934546961956865/f58c245c5b148b43f7e793ea67baecca.webp?size=256]
    $footer[$username[$authorID]#$discriminator[$authorID] || $authorID ||;$authorAvatar]
    $suppressErrors[:x:]`,
	nonPrefixed: true
})


// welcomes 