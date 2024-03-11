//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isROwner }) => {
    if (!isOwner) return dfail('owner', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply('*تـــم اطـفـاء الـبـوت فــي هـذا الـجروب*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = ['اطفاء', 'chatoff'] 

export default handler
 
