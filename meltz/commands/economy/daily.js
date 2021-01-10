module.exports = ({
    name: "daily",
    code: `$author[Dniowka uzytkownika $username[$authorID]]
    $description[Odebrales swoja dniowke wynoszaca 5000$]
    $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];5000]]
    $color[2add15]
    $cooldown[24h;Musisz poczekac %time%]

    $suppressErrors[:x:]`
})