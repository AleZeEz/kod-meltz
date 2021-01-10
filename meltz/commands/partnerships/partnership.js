module.exports = ({
    name: "partnerstwo",
    aliases: ["p"],
    code: `$deletecommand
   $giveRoles[$mentioned[1];$getServerVar[rola]]
   $channelSendMessage[$channelID;{title: Sukces} {description: Pomyslnie wyslano na kanal partnerstw!} {color: 2add15}]
   $channelSendMessage[$getServerVar[kanal];{title: $serverName - Partnerstwo} {description: $noMentionMessage
    
   ☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵
    
   > **Partner** <@$mentioned[1]>
   > **Partner Menadzer** <@$authorID>
    
   ☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵☵}{timestamp}{color: $getServerVar[kolor]}]
   $onlyIf[$mentioned[1]!=;{title: Error} {description: Musisz oznaczyc partnera!} {color: fa4a4a} {timestamp}]
   $onlyIf[$message[2]!=;{title: Error} {description: Musisz oznaczyc partnera oraz wkleic jego reklame!\n Aby to zrobic uzyj: $getVar[grave] partnerstwo @wzmiankapartnera <reklama partnera $getVar[grave]} {color:fa4a4a} ]
   $onlyIf[$getUserVar[partnership]==1;{title: Error} {description: Musisz posiadac uprawnienia Partner Menadzera!} {footer: Aby je nadac uzyj partnermenadzer}]
   $onlyIf[$roleExists[$getServerVar[rola]]==true;{description: Obecnie ustawiona rola, nie istnieje!}]
   $onlyIf[$channelExists[$getServerVar[kanal]]==true;{description: Obecnie ustawiony kanal, nie istnieje!}]
   $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
   $suppressErrors[:x: Wystapil nieznany blad] `
   })