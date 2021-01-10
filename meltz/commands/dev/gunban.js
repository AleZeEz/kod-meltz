module.exports = ({
    name: "gunban",
    aliases: ["gub"],
    code: `$channelSendMessage[780421066085498931;{title: Globalny UNBan} {author: $username[$authorID]#$discriminator[$authorID]:$authorAvatar} {description: **Powod** \n$noMentionMessage\n \n**Uzytkownik** \n$username[$message[1]]#$discriminator[$message[1]]} {color: 2add15} {timestamp}]
    nadano
    $setGlobalUserVar[gban;0;$message[1]]
    $onlyIf[$message[1]=; Musisz wpisac ID!]
    $onlyIf[$getGlobalUserVar[globalperms]>=3;{author: Error:https://cdn.discordapp.com/emojis/773524874395123732.png?v=1} {description: Nie posiadasz wymaganych uprawnien! \n**Posiadasz:** $getGlobalUserVar[globalperms]\n**Wymagane:** 03 (\`Developer\`)} {color: fa4a4a}]` 
})