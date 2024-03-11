
import yts from 'yt-search'

let handler = async (m, {conn, text }) => {
  if (!text) throw '*عــلى مــاذا تــريــد ان تــبــحث !؟*'
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*┇ 🪪 ┇ الــعــنوان* ${v.title}
*┇ 🖇️ ┇ الــرابــط* ${v.url}
*┇ 🕛 ┇ الــمـدة* ${v.timestamp}
*┇ 🌀 ┇ مــنـذ* ${v.ago}
*┇ 👀 ┇ الــمشــاهــدات* ${v.views}

   `.trim()
      case 'canal': return `
❒ *${v.name}* (${v.url})
❒ ${v.subCountLabel} (${v.subCount}) مشتركين
❒ ${v.videoCount} فيديوهات
`.trim()
    }
  }).filter(v => v).join('\n\n*⦊─── ── ─ ⚡ ─ ── ───⦉*\n\n');
  m.react('🔍')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch'] 
handler.tags = ['dl']
handler.command = ['بحث', 'yts'] 

export default handler
