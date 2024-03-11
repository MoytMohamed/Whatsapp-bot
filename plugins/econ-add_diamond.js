//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*نــسـيت الــمنـشـن يــحب !*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '*نــسـيـت تـضـيف عـدد الــجواهـر !*'
    if (isNaN(txt)) throw '🔢 ارقام فقط 🔢'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '*أقــل شـي 1 !*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`
┏━──━✦⊱⋟🌩️⋞⊰✦━──━┓
✨ *المجموع:* ${dmt}
┗━──━✦⊱⋟🌩️⋞⊰✦━──━┛`)
   conn.fakeReply(m.chat, `✨ لقد استلمت\n*+${dmt}* جوهره`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['ضيف_جواهر'] 
handler.rowner = true

export default handler
