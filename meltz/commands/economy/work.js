module.exports = ({
    name: "work",
    aliases: ["praca","pracuj"],
    code: `$author[Praca uzytkownika $username[$authorID]#$discriminator[$authorID];$authorAvatar]
    $description[<@$authorID>, Pracowales jako $randomText[Pracownik McDonald;Support ServerHelper]. Zarobiles \`$random[7500;11000]\`]
    $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];$random[7500;11000]]]
    $color[2add15]
    $cooldown[1h;Musisz poczekac %time%]
    $suppressErrors[:x: Error (line: 500,98)]`
})