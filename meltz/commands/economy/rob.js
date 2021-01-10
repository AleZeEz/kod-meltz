module.exports = ({
    name: "rob",
    aliases: ["okradnij"],
    code: `
    $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];-$random[100;500]];$mentioned[1]]
    $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[100;500]]]
    Udalo Ci sie okrasc <@$mentioned[1]> z $random[100;500]:coin:
    $onlyIf[$getGlobalUserVar[cash;$mentioned[1]]>$random[0;10000]; Nie udalo Ci sie okrasc $username[$mentioned[1]]#$discriminator[$mentioned[1]]. Jego ochroniarz zabral Ci $random[10;800]]
    $onlyIf[$mentioned[1]!=$authorID;Nie mozesz okrasc samego siebie]
    $onlyIf[$mentioned[1]!=; Musisz kogos oznaczyc!]
    $onlyForIDs[675660847577825291;{title: Blad}{description: Komenda wylaczona} {color: fa4a4a}]
    $cooldown[2h;Musisz poczekac %time%] 
    $suppressErrors[:x:]`,

})