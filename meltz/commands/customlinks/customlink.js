module.exports = ({
    name: "customlink",
    code: `$useChannel[781548625632165918]
    $addReactions[<:yes:773524779138285568>;<:no:773524874395123732>]
    $title[CUSTOMLINK]$description[**Nazwa**: [$serverName\\]($getServerInvite)
**ID:** $guildID \n\n
**ID Zglaszajacego** $getVar[grave]$authorID$getVar[grave]
**USERNAME Zglaszajacego** $username[$authorID]#$discriminator[$authorID]
**Wzmianka** <@$authorID>
\n\n
**Zadany link** ../$message[1]
**Tresc**: $replaceText[$message;$message[1]; ;-1]]$color[e97511]
$footer[Aby przyjac wpisz %acceptcustom (id serwera)]
    $channelSendMessage[$channelID;{title: Sukces}{description: Pomyslnie wyslano twoje podanie o $getVar[grave]customlink$getVar[grave]. Rozpatrzenie podania trwa zwykle do **72 godzin**. **Prosimy o cierpliwosc**}{color: 2add15}]
    $cooldown[30m;:x: Tej komendy mozesz uzyc ponownie za %time%]
    $onlyIf[$message[3]!=;{description: Podaj elementy! customlink (link) (opis serwera) 
    **Przyklad**: 
    $getVar[grave1]%customlink mojserwer Moj serwer posiada moje community, mojego bota, moja administracje moje kanaly moje konkursy (im wiecej tym lepiej, lecz nie za duzo)$getVar[grave1]
Link bedzie wygladal tak: serverhelper.ga/mojserwer}{color: fa4a4a}{timestamp}{footer: $authorID - $username[$authorID]#$discriminator[$authorID]}]
$onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
$suppressErrors[:x:]`
})
