module.exports = ({
    name: "8ball",
    code: `$color[ff8a00] 
    $description[Magiczna kula, prawde ci powie... $editIn[3s;$randomText[{description: Odpowiedz na pytanie \`$message\` to \`Tak\`};{description: Odpowiedz na pytanie \`$message\` to \`Nie\`};{description: Odpowiedz na pytanie \`$message\` to \`Nie Wiem\`};{description: Odpowiedz na pytanie \`$message\` to \`Chyba Tak\`};{description: Odpowiedz na pytanie \`$message\` to \`Chyba Nie\`};{description: Odpowiedz na pytanie \`$message\` to \`Raczej Tak\`};{description: Odpowiedz na pytanie \`$message\` to \`Raczej nie\`}]]]
    $onlyIf[$message[1]!=; Musisz cos wpisac!]
    $suppressErrors[Oopsie! Cos poszlo nie tak!]`

})