//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isROwner} ) => {
    if (!isOwner) return dfail('owner', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    m.reply('*✅ البوت شغال في هذه المجموعه*')   
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = ['chaton', 'تفعيل'] 

export default handler
