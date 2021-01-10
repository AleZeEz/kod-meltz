module.exports = ({
    name: "give-eco",
    code: `<@$mentioned[1]> ($mentioned[1]) - setcash = $noMentionMessage
    $setGlobalUserVar[cash;$noMentionMessage;$mentioned[1]]
    $onlyIf[$mentioned[1]!=; %give-eco @wzmianka <liczba>]
    $onlyIf[$message[2]!=; Podaj elementy! give-eco @wzmianka <nowa liczba (! nie dodajesz, a ustawiasz!)> ]
    $onlyForIDs[675660847577825291;646727385990823936;{title: Blad}{description: Potrzebujesz uprawnien **BOT_MODERATOR**} {color: fa4a4a}]
    $suppressErrors[:x:]`
})



