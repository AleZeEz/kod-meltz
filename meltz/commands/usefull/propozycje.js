module.exports = ({
    name: "propozycja",
    code: `$useChannel[$getServerVar[propozycje]]
    $author[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
    $title[Nowa propozycja!]
    $description[$message]
    $footer[$username#$discriminator[$authorID] ($authorID)]
    $color[#33abff]
    $channelSendMessage[$channelID;Sukces]
    $addReactions[<:yes:773524779138285568>;<:no:773524874395123732>]
    $onlyIf[$message[1]!=;Musisz cos wpisac!]
    $onlyIf[$channelExists[$getServerVar[propozycje]]==true;Obecnie ustawiony kanal, nie istnieje!]
    $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
    $suppressErrors[:x: Wystapil nieznany blad] `
    })