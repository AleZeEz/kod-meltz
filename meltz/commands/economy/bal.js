module.exports = ({
    name: "bal",
    aliases: ["balance","hajs","portfel"],
    code: `$author[Portfel uzytkownika $username[$authorID]#$discriminator[$authorID];$authorAvatar]
    $description[**Portfel** \`$getGlobalUserVar[cash]\`
    **Bank** \`$getGlobalUserVar[bank]\`]
    $color[2add15]
    $footer[Pelna lista komend ekonomii na: https://www.serverhelper.ga/docs]
    $addTimestamp
    $suppressErrors[:x:]`
})