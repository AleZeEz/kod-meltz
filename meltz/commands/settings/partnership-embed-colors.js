
module.exports = ({
    name: "partnerstwo-kolor",
    code: `Sukces, ustawiono kolor embed partnerstw na $message[1]
    $setServerVar[kolor;$message[1]]
    $onlyPerms[admin;{title: Err!} {description: Musisz posiadac uprawnienia $getVar[grave]ADMINISTRATOR$getVar[grave]} {color: fa4a4a} {footer: $username ($authorID)} {timestamp}]
    $onlyIf[$message[1]!=;Podaj kolor HEX!]
    $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
    $suppressErrors[:x: Wystapil nieznany blad]`
    })