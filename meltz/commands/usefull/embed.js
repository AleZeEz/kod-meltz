module.exports =( {
    name: "embed",
    code: `
    $color[$splitText[3]]
    $description[$splitText[2]]
    $title[$splitText[1]]
    $onlyIf[$splitText[3]!=; {title: Error!} {description: Musisz podac brakujace elementy! embed tytul/opis/kolor}{color: fa4a4a}{timestamp}{footer: Wywolane przez $username[$authorID]}]
    $textSplit[$message;/]
    $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
    $suppressErrors[:x: Error]`
})