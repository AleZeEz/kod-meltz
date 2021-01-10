module.exports = ({
    name: "deposite",
    aliases: ["dep", "wplac"],
    code: `
   $author[$username#$discriminator;$authorAvatar]
   $setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$replaceText[$replaceText[$checkCondition[$message[1]==all];true;$getGlobalUserVar[cash]];false;$message[1]]]]
   $setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$replaceText[$replaceText[$checkCondition[$message[1]==all];true;$getGlobalUserVar[cash]];false;$message[1]]]]
   $description[Poprawnie wplacono \`$replaceText[$replaceText[$checkCondition[$message[1]==all];true;$getGlobalUserVar[cash]];false;$message[1]]\` :coin: do banku]
   $color[2add15]
   



   $onlyIf[$replaceText[$replaceText[$checkCondition[$message[1]==all];true;$getGlobalUserVar[cash]];false;$message[1]]>0;{description: Nie mozesz wplacic wprowadzony element!}{color: fa4a4a}{author: ❌}]
   $onlyIf[$replaceText[$replaceText[$checkCondition[$message[1]==all];true;$getGlobalUserVar[cash]];false;$message[1]]<=$getGlobalUserVar[cash];{description: Nie posiadasz tylu :coin:}{color: fa4a4a}{author: ❌ }]
   $onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message[1]==all];true;$getGlobalUserVar[cash]];false;$message[1]]]==true;{description: Wprowadzono nieprawidlowy element! Uzyj \`dep <ile>\`, lub \`dep all\` jezeli chcesz wplacic wszystko}{color: fa4a4a}{author: ❌}]
   $suppressErrors[:x:]`
   });


