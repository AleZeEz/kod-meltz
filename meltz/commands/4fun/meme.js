module.exports = ({
    name: "meme",
    code: `$title[Randomowy Mem]
    $color[#ff8a00]
    $image[$jsonRequest[https://some-random-api.ml/meme;image]]
    $footer[$username#$discriminator[$authorID];$authorAvatar]
    $suppressErrors[Oopsie! Cos poszlo nie tak!]`
})