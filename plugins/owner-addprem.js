//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `*نــسـيت الـمنـشن !*`
if (global.prems.includes(who.split`@`[0])) throw '*انـــه بـريـمــيام بــالــفعـل !*'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `*لــقد اصـبــحت بـريـمـيام ! @${who.split`@`[0]}`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'ضيف_بريميام'] 

handler.group = true
handler.rowner = true

export default handler
