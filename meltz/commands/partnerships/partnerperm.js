module.exports = ({
    name: "partnermenadzer",
    aliases: ["pm"],
    code: `$title[Sukces] $description[Zmieniono uprawnienia dla <@$mentioned[1]> na $message[1]]$color[2add15]
   $setUserVar[partnership;$message[1];$mentioned[1]]
   $onlyIf[$message[2]!=;Podaj elementy! partnermenadzer <1 aby nadac/0 aby zabrac> @ping]
   $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
   $onlyPerms[admin;{title: Err!} {description: Musisz posiadac uprawnienia $getVar[grave]ADMINISTRATOR$getVar[grave]} {color: fa4a4a} {footer: $username ($authorID)} {timestamp}]
   $suppressErrors[:x: Wystapil nieznany blad]`
   })