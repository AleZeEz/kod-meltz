module.exports = ({
    name: "mute-rola",
    code: `Sukces, ustawiono role wyciszonego na $mentionedRoles[1]
    $setServerVar[mute;$mentionedRoles[1]]
    $onlyPerms[admin;{title: Err!} {description: Musisz posiadac uprawnienia $getVar[grave]ADMINISTRATOR$getVar[grave]} {color: fa4a4a} {footer: $username ($authorID)} {timestamp}]
    $onlyIf[$mentionedRoles[1]!=;Musisz oznaczyc role!]
    $onlyIf[$message[1]!=;Musisz oznaczyc role!]
    $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
    $suppressErrors[:x: Wystapil nieznany blad]`})