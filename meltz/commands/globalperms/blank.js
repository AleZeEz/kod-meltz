module.exports = ({
    name: "globalperms",
    code: `$onlyIf[$message[1]!=; {color: fa4a4a} {description:**Error!**\n Musisz podac typ!\n Przyklad: \`globalperms (typ (user,support,moderator,developer))\` (ID)}]
    $suppressErrors[:x:]`
})