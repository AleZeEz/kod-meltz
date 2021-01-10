module.exports = ({
    name: "id",
    code: `$description[ID <@$mentioned[1]> to \`$mentioned[1]\` ]
    $onlyIf[$mentioned[1]!=; Musisz kogos oznaczyc!]`
})