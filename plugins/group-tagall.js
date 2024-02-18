let handler = async(m, { conn, text, participants }) => {
  let teks = `⋙ *TAGALL* ⋘
\n *${text ? text : 'By 𝐁𝐲 𝐌𝐢𝐦𝐢 𝐒𝐞𝐭𝐨𝐛𝐞𝐫𝐢 🍓'}*\n\n`
		      	for (let mem of participants) {
		            teks += `│◦❒ @${mem.id.split('@')[0]}\n`
				}
                teks += `
TagAll Members 𝐁𝐲 𝐌𝐢𝐦𝐢 𝐒𝐞𝐭𝐨𝐛𝐞𝐫𝐢 🍓`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['ta <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
