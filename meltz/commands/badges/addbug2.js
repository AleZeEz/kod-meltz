module.exports = ({
    name: "badge",
    code: `
    $title[Sukces] $description[Pomyslnie nadano odznake!] $color[add15]
    $setGlobalUserVar[badges_bughunter2;<:bughunter2:773964148346060851>;$message[3]]
    $onlyIf[$userExists[$message[3]]==true;{description: Podany uzytkownik nie istnieje!}{color: fa4a4a}]
    $onlyIf[$getGlobalUserVar[globalperms]>=3;{author: Error:https://cdn.discordapp.com/emojis/773524874395123732.png?v=1} {description: Nie posiadasz wymaganych uprawnien! \n**Posiadasz:** $getGlobalUserVar[globalperms]\n**Wymagane:** 03 (\`Developer\`)} {color: fa4a4a}]
    $onlyIf[$message[3]!=;Musisz podac ID!]
    $onlyIf[$message[2]==bughunter2; ]
    $onlyIf[$message[1]==add; ]`
})