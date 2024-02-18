let handler = async m => {

let intro = `𝒃𝒐𝒃𝒐𝒕 𝒎𝒊𝒎𝒊 𝒐𝒏𝒛 ♡`
m.reply(intro)
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

module.exports = handler
