module.exports = ({
    name: "propozycje-kanal",
    code: `Sukces, ustawiono kanal propozycji na $mentionedChannels[1]
    $setServerVar[propozycje;$mentionedChannels[1]]
    $onlyPerms[admin;{title: Err!} {description: Musisz posiadac uprawnienia $getVar[grave]ADMINISTRATOR$getVar[grave]} {color: fa4a4a} {footer: $username ($authorID)} {timestamp}]
    $onlyIf[$mentionedChannels[1]!=;Musisz oznaczyc kanal!]
    $onlyIf[$message[1]!=;Musisz oznaczyc kanal!]
    $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
    $suppressErrors[:x: Wystapil nieznany blad]`})