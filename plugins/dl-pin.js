import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `${usedPrefix + command} gojo`
  m.reply(wait)
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*${text}*
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['downloader']
handler.command = /^(بين|pin)$/i

export default handler