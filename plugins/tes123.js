let handler = async m => {

let intro = `𝗕𝗼𝘁'𝘀 𝘄𝗶𝘆𝗮 ꒰ˊ• ·̭ •̥ ꒱`
m.reply(intro)
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

module.exports = handler
