let handler = async(m, { conn, text, participants }) => {
  let teks = `⋙ *TAGALL* ⋘
\n *${text ? text : 'By Putbotz'}*\n\n`
		      	for (let mem of participants) {
		            teks += `│◦❒ @${mem.id.split('@')[0]}\n`
				}
                teks += `
TagAll Members By wa.me/601169466091`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['otagall <pesan>']
handler.tags = ['owner']
handler.command = /^(otagall)$/i

handler.group = true
handler.owner = true

module.exports = handler
