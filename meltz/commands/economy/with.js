module.exports = ({
    name: "withdraw",
    aliases: ['with', 'wyplac'],
    code: `
    $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[cash]];false;$message[1]]]]
    $setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[cash]];false;$message[1]]]]
   $author[$username#$discriminator;$authorAvatar]
   $description[Pomyslnie pobrales **$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[cash]];false;$message[1]]** :coin: z banku]
   $color[RANDOM]
 
  


   $onlyIf[$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[cash]];false;$message[1]]>0;{description: Error}{color: ff0000}{author: ❌ Nie prawidlowy error.}]
   $onlyIf[$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[cash]];false;$message[1]]<=$getGlobalUserVar[bank];{description: Nie masz tylu :coin:}{color: ff0000}{author: ❌ Error}]
   $onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$toLowercase[$message[1]]==all];true;$getGlobalUserVar[cash]];false;$message[1]]]==true;{description: Wprowadzono nieprawidlowy element}{color: ff0000}{author: ❌ Zly element}]
   $suppressErrors[:x:] `
   });