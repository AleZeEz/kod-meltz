module.exports = ({
    name: "crime",
    code: `$author[Przestepstwo uzytkownika $username[$authorID]#$discriminator[$authorID];$authorAvatar]
    $description[<@$authorID>, okradles $randomText[fleksa;bank;jubilera;sklep z majnkraftami]. Zarobiles \`$random[-1000;25000]\`]
    $color[2add15]
    $onlyIf[$random[-1000;25000]>1; {author: Przestepstwo uzytkownika $username:$authorAvatar} {description:<@$authorID>, okradles $randomText[fleksa ale zajebal ci kopa;fleksa bo schudnal ale grzebales mu w dupie] Straciles $random[-1000;25000]} {color: fa4a4a}]
    $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];$random[-1000;25000]]]
    $cooldown[6h;Musisz poczekac %time%]
    $suppressErrors[:x: Err (line 508)]
    `
})