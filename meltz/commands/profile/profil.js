module.exports = ({
    name: "profil",
    code: `$author[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
    $thumbnail[$userAvatar[$findUser[$message]]]
    $title[Profil uzytkownika $username[$findUser[$message]]#$discriminator[$findUser[$message]]]
    $color[#ff8a00]
    $addField[Lacznie;$sum[$getGlobalUserVar[cash;$findUser[$message]];$getGlobalUserVar[bank;$findUser[$message]]]:coin:;yes]
    $addField[Bank;$getGlobalUserVar[bank;$findUser[$message]]:coin:;yes]
    $addField[Portfel;$getGlobalUserVar[cash;$findUser[$message]]:coin:;yes]
    $addField[Nick;\`$replaceText[$nickname[$findUser[$message]];$username[$findUser[$message]];Nie ustawiono]\`;yes]
    $addField[ID;\`$findUser[$message]\`;yes]
    $addField[Discriminator;\`#$discriminator[$findUser[$message]]\`;yes]
    $addField[Avatar;[Kliknij tutaj\\]($userAvatar[$findUser[$message]]);yes]   
    $addField[Data stworzenia konta;$creationDate[$findUser[$message]];yes]
    $addField[Status;$status[$findUser[$message]];yes]
    $description[Odznaki $username[$findUser[$message]];$getGlobalUserVar[badges_dev;$findUser[$message]] $getGlobalUserVar[badges_staff;$findUser[$message]] $getGlobalUserVar[badges_bughunter2;$findUser[$message]] $getGlobalUserVar[badges_bughunter;$findUser[$message]] $getGlobalUserVar[badges_christmas;$findUser[$message]] 
\n\n **Uwaga!** Tymczasowo, mozliwosc przypiecia kont do swojego profilu zostala wylaczona! Opcja pojawi sie za niedlugo** 
    \n**Wlasny opis:** $getGlobalUserVar[profilopis;$findUser[$message]] ]
    $addField[<:instaemoji:789510631522828328> Konto Instagram;$getGlobalUserVar[instagram];yes]
    $addField[<:githubemoji:789510631572111380> Konto Github;$getGlobalUserVar[github];yes]
    $addField[<:youtubeemoji:790277794902179850> Konto YouTube;$getGlobalUserVar[youtube];yes]
    $suppressErrors[:x: Oopsie! Wystapil niespodziewany blad!]`
    
})