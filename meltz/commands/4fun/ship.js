module.exports = ({
    name: "ship",
    code: `$description[<@$mentioned[1]> :heart: <@$mentioned[2]> = \`$random[0;100]%\`]
    $onlyIf[$mentioned[2]!=; Musisz podac ship! ship @wzmianka @wzmianka]
    $suppressErrors[Oopsie! Cos poszlo nie tak!]`
})