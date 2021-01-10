module.exports = ({
    name: "rip",
    code: `$image[https://api.no-api-key.com/api/v2/rip?user_image=$authorAvatar]
    $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
    $suppressErrors[:x: Wystapil nieznany blad]
    `
    })