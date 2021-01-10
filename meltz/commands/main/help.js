module.exports = ({
name: "help",
aliases: ["pomoc"],
code: `$title[<:icon_presence:783384898593095690> Lista Komend]
$description[$getVar[grave]ServerHelper jest nowym, preznie rozwijanym botem. Oferuje on wiele przydatnych komend, zmienialny prefix oraz wiele, wiele wiecej$getVar[grave]
 
<:emoji_78:780887626713923604> **BOT (4)** 
\`help\`, \`prefix\`, \`botstats\`, \`lang\`

<:icon_settings:783381911379640341> **USTAWIENIA (4)**
\`prola\`, \`pkanal\`, \`propozycje-kanal\`, \`mute-rola\`

<:emote2:780071779813163049> **PARTNERSTWA (3)**
\`partnerstwo\`, \`partnermenadzer\`, \`partnerstwapomoc\`

<:icon_ban:772882992208281622> **MODERACYJNE (5)**
\`mute\`, \`clear\`, \`ban\`, \`kick\`, \`warn\`

<a:5268_loading:756947352971116594> **PRZYDATNE (1)**
\`propozycja\`,
 
:laughing: **4FUN (5)**
\`tweet\`, \`8ball\`, \`meme\`, \`moneta\`, \`ship\` 

<:opis:773964148550795304> **CUSTOM LINKS (1)**
\`customlink\`, 

:coin: **EKONOMIA (6)**
\`work\`, \`crime\`, \`bal\`, \`daily\`, \`dep\`, \`with\`
]
$footer[ServerHelper | Wywolane przez: $username#$discriminator[$authorID]]
$color[#dd8a0e]
$thumbnail[$authorAvatar]
$onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]`
})