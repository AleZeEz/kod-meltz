module.exports = ({
    name: "gban",
    aliases: ["gb"],
    code: `$channelSendMessage[780421066085498931;{title: Globalny Ban} {author: $username[$authorID]#$discriminator[$authorID]:$authorAvatar} {description: **Powod** \n$noMentionMessage\n \n**Uzytkownik** \n$username[$message[1]]]#$discriminator[$message[1]]} {color: ff0000} {timestamp}]
    nadano
    $setGlobalUserVar[gban;1;$message[1]]
    $onlyIf[$message[1]!=; Musisz kogos oznaczyc!]
    $onlyIf[$getGlobalUserVar[globalperms]>=3;{author: Error:https://cdn.discordapp.com/emojis/773524874395123732.png?v=1} {description: Nie posiadasz wymaganych uprawnien! \n**Posiadasz:** $getGlobalUserVar[globalperms]\n**Wymagane:** 03 (\`Developer\`)} {color: fa4a4a}]` 
})