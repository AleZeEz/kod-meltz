module.exports = ({
    name: "opis",
    code: `$author[Sukces;https://cdn.discordapp.com/emojis/767709295265316865.png?v=1]
    $setGlobalUserVar[profilopis;$message]
    $color[2add15] $description[Sukces! Ustawiono twoj opis profilu na $message \n \n **Pamietaj!** __Twoj opis nie moze zawierac linkow, zaproszen do serwerow!__ ]
    $channelSendMessage[789998423226843177;{description: **ID:** \`$authorID\` \n **Opis:** \`\`\`
$message 
\`\`\`}]
    $onlyIf[$message[1]!=; {author: Error:https://cdn.discordapp.com/emojis/773524874395123732.png?v=1}{description: Musisz podac swoj nowy opis profilu!}{color: fa4a4a}]
    $suppressErrors[:x: Oopsie! Wystapil niespodziewany blad!]`
})