module.exports = ({
    name: "tweet",
    code: `$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;%20;-1]]
    $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
    $suppressErrors[:x: Wystapil nieznany blad]` 
    })