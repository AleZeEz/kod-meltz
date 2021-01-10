module.exports = ({
    name: "mute",
    code: `$giveRoles[$mentioned[1];$getServerVar[mute]]
    $title[Wyciszenie]
    $addField[Powod;$noMentionMessage;yes]
    $addField[Uzytkownik;<@$mentioned[1]>;yes]
    $addField[Administrator;<@$authorID>;yes]
    $color[fa4a4a]
    $onlyIf[$roleExists[$getServerVar[mute]]==true;Obecnie ustawiona rola Wyciszonego nie zostala znaleziona!]
    $onlyIf[$noMentionMessage!=;Musisz podac powod wyciszenia!]
    $onlyIf[$mentioned[1]!=;Musisz oznaczyc kogo chcesz wyciszyc!]
    $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
    $onlyPerms[managemessages;{title:Error!}{color:fa4a4a}{decription:Nie masz wystarczajacych uprawnien do wykonania tej komendy (MANAGE MESSAGES)}]
    $suppressErrors[:x: Wystapil nieznany blad]`
    })