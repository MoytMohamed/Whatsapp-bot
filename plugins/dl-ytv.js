
import { ytmp4 } from '../ytmp4.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
 let v = text
 let input = `[!] *wrong input*
 
Ex : ${usedPrefix + command} https://youtube.com/watch?v=bzpXVCqNCoQ`
 if (!text) return m.reply(input)
   ytmp4(v).then((result) => {
    const video = result.url
    const title = result.title
    const duration = result.duration
    const cenel = result.channel
    const publish = result.published
    const view = result.views
    
    conn.sendFile(m.chat, video, title + '.mp4', 
`*⦊─── ── ─ ⚡ ─ ── ───⦉*
*📥╏ الـــعــنـوان: ${title}*
*📥╏ الـقـناة : ${cenel}*
*📥╏ الــجـوده: 360*
*⦊─── ── ─ ⚡ ─ ── ───⦉*`
, m)
  
    })
   
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['downloader'] 
handler.command = /^(ytmp4|ytv|فيديو)$/i
handler.limit = true

export default handler
 