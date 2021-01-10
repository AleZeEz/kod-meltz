module.exports = ({
    name: "changeopis",
    code: `$author[Sukces;https://cdn.discordapp.com/emojis/767709295265316865.png?v=1]
    $setGlobalUserVar[profilopis;||Opis zostal zablokowany przez osobe z naszego STAFF Teamu!||;$message[1]]
    $color[2add15] $description[Sukces! Zresetowano uzytkownikowi opis!]
    $channelSendMessage[789998423226843177;{description: **Zmiana opisu przez STAFF** \n **ID:** \`$authorID\` \n**DLA** $message[1]}]
    $onlyIf[$userExists[$message[1]]==true;{description: Podany uzytkownik nie istnieje!}{color: fa4a4a}]
    $onlyIf[$message[1]!=; {author: Error:https://cdn.discordapp.com/emojis/773524874395123732.png?v=1}{description: Musisz podac ID uzytkownika!}{color: fa4a4a}]
    $onlyIf[$getGlobalUserVar[globalperms]>=1;{author: Error:https://cdn.discordapp.com/emojis/773524874395123732.png?v=1} {description: Nie posiadasz wymaganych uprawnien! \n**Posiadasz:** $getGlobalUserVar[globalperms]\n**Wymagane:** 01 (\`Support\`)} {color: fa4a4a}]
    $suppressErrors[:x: Oopsie! Wystapil niespodziewany blad!]`
})