module.exports = ({
    name: "botstats",
    code: `$title[ServerHelper STATS]$description[> Servers: **$serverCount**
    > Users: **$sum[$allMembersCount;7700]**
    > Ping: **$pingms**
    > Uptime: **$uptime**]
    $color[2add15]
    $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
    $suppressErrors[:x: Wystapil nieznany blad]`
    })