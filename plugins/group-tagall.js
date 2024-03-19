let handler = async(m, { conn, text, participants }) => {
  let teks = `⋙ *TAGALL* ⋘
\n *${text ? text : 'by 🧾﹢ 𝖻𝗈𝗍 𝗐𝗂𝗒𝖺𝗌𝗍𝗈𝗋𝖾 ྀ   ׅ ࣪ ⁺'}*\n\n`
		      	for (let mem of participants) {
		            teks += `│◦❒ @${mem.id.split('@')[0]}\n`
				}
                teks += `
TagAll Members By 🧾﹢ 𝖻𝗈𝗍 𝗐𝗂𝗒𝖺𝗌𝗍𝗈𝗋𝖾 ྀ   ׅ ࣪ ⁺`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
