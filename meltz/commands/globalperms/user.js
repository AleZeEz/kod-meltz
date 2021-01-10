module.exports = ({
    name: "globalperms",
    code: `$setGlobalUserVar[globalperms;0;$message[2]]
    $author[Sukces!;https://cdn.discordapp.com/emojis/767709295265316865.png?v=1]
    $description[Zmieniono poziom globalnych uprawnien dla \`$username[$message[2]]\` na \`0\` (\`Uzytkownik\`)] $color[2add15]
    $onlyIf[$userExists[$message[2]]==true;{description: Podany uzytkownik nie istnieje!}{color: fa4a4a}]
    $onlyIf[$message[2]!=;{description: Musisz podac ID uzytkownika!} {color: fa4a4a}]
    $onlyIf[$getGlobalUserVar[globalperms]>=3;{author: Error:https://cdn.discordapp.com/emojis/773524874395123732.png?v=1} {description: Nie posiadasz wymaganych uprawnien! \n**Posiadasz:** $getGlobalUserVar[globalperms]\n**Wymagane:** 03 (\`Developer\`)} {color: fa4a4a}]
    $onlyIf[$message[1]==user; ]
    $suppressErrors[:x:]`
})
