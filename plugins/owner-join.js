
let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {

   if (!isOwner) return conn.sendButton(m.chat, `*الــسلام عــلـيكــم*\n*انــا بــوت جــديد*\n*اكــتـب 『 .اوامــر 』* عــشان تــجـيك قــايـمة الأوامــر`.trim(), igfg, null, [
       ['Alquilar', `${usedPrefix}buyprem`]] , m, { mentions: [m.sender] })

  let time = global.db.data.users[m.sender].lastjoin + 86400000
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))

  let name = m.sender 
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `*مــثـال : ${usedPrefix + command} < الرابط > < الايام >` 
  if (!code) throw `*الــرابــط خـربــان !*`
  if (!args[1]) throw `*نـــسـيت تــكـتب عــدد الأيــام !*`
  if (isNaN(args[1])) throw `*عــدد الأيــام يــكون ارقــام فـقط !*`
  let owbot = global.owner[1] 
  m.reply(`*انــتــظر !*`)
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
  let nDays = 86400000 * args[1]  
  let now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += nDays
  else global.db.data.chats[res].expired = now + nDays
  if (e.length) await m.reply(`*الــسلام عــلـيكــم*\n*انــا بــوت جــديد*\n*اكــتـب 『 .اوامــر 』* عــشان تــجـيك قــايـمة الأوامــر\n\n*ســوف اخــرج بــعـد : ${msToDate(global.db.data.chats[res].expired - now)}*`)

 if (e.length) await conn.reply(res, `*الــسلام عــلـيكــم*\n*انــا بــوت جــديد*\n*اكــتـب 『 .اوامــر 』* عــشان تــجـيك قــايـمة الأوامــر`, m, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {

     await conn.reply(global.owner[1]+'@s.whatsapp.net', `*الــسلام عــلـيكــم*\n*انــا بــوت جــديد*\n*اكــتـب 『 .اوامــر 』* عــشان تــجـيك قــايـمة الأوامــر\n\n*ســوف اخــرج بــعـد : ${msToDate(global.db.data.chats[res].expired - now)}*`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(global.owner[1]+'@s.whatsapp.net', `*الــسلام عــلـيكــم*\n*انــا بــوت جــديد*\n*اكــتـب 『 .اوامــر 』* عــشان تــجـيك قــايـمة الأوامــر\n\n*ســوف اخــرج بــعـد : ${msToDate(global.db.data.chats[res].expired - now)}*`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`*الــسلام عــلـيكــم*\n*انــا بــوت جــديد*\n*اكــتـب 『 .اوامــر 』* عــشان تــجـيك قــايـمة الأوامــر\n\n*ســوف اخــرج بــعـد : ${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `*الــسلام عــلـيكــم*\n*انــا بــوت جــديد*\n*اكــتـب 『 .اوامــر 』* عــشان تــجـيك قــايـمة الأوامــر
@${conn.user.jid.split('@')[0]} سيخرج تلقائيًا بعد\n\n${msToDate(global.db.data.chats[res].expired - now)}`
  await conn.sendButton(res, mes, igfg, null, [[`✆ الــمـطور`, `${usedPrefix}المطور`], [`⦙☰ الأوامـــر`, `${usedPrefix}اوامر`]], m, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(global.owner[1]+'@s.whatsapp.net', e)
      throw `*لــقد تــم ارســال طــلب !*`
      }
}
handler.help = ['join <chat.whatsapp.com> <dias>']
handler.tags = ['owner']
handler.command = ['join', 'انضم'] 

//handler.owner = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days*\n ', h, ' *Hours*\n ', m, ' *Minutes*\n ', s, ' *Seconds* '].map(v => v.toString().padStart(2, 0)).join('')
}
