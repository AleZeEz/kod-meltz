module.exports = ({
    name: "ban",
    code: `
   $ban[$mentioned[1]]
   $title[Ban]
   $addField[Powod;$noMentionMessage;yes]
   $addField[Uzytkownik;<@$mentioned[1]>;yes]
   $addField[Administrator;<@$authorID>;yes]
   $color[fa4a4a]
   $onlyIf[$noMentionMessage!=;Musisz podac powod!]
   $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Ten uzytkownik jest wyzej odemnie w rolach!]
   $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Ten uzytkownik jest wyzej od Ciebie w rolach!]
   $onlyIf[$mentioned[1]!=$authorID;Nie mozesz zbanowac samego siebie!]
   $onlyIf[$mentioned[1]!=;Musisz oznaczyc kogo chcesz zbanowac!]
   $onlyIf[$getGlobalUserVar[gban;$authorID]==0;{title: Blad} {description: Twoje konto znajduje sie na liscie __**globalnie zbanowanych**__, co skutkuje zablokowaniem uzywania przez Ciebie komend}{color: fa4a4a}]
   $onlyPerms[ban;{title:Error!}{color:fa4a4a}{description:Nie masz wystarczajacych uprawnien do wykonania tej komendy! (BAN MEMBERS)}]
   $suppressErrors[:x: Wystapil nieznany blad]`
    })
   