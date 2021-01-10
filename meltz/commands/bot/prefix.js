module.exports = ({
    name: "prefix",
    code: `$color[2add15]$title[] $description[Sukces! Ustawiono prefix na $getVar[grave]$message[1]$getVar[grave]]
    $setServerVar[prefix;$message[1]]
    $onlyPerms[admin;{title: Err!} {description: Musisz posiadac uprawnienia \`ADMINISTRATOR\`} {color: fa4a4a} {footer: $username ($authorID)} {timestamp}]
    $onlyIf[$message[1]!=;Nie podales elementu!]
    $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
    $suppressErrors[:x: Wystapil nieznany blad]`
    }) 