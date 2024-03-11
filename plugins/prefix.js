let handler = async(m, { conn, text }) => {
  if (!text) throw `No symbol detected ...`
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '-').replace(/-/g, '-') + ']')
  await m.reply(`*تــم تــغــييــر الــنقــطـه بــ${text}*`)
}
handler.help = ['setprefix'].map(v => v + ' [prefix]')
handler.tags = ['owner']
handler.command = /^(ب)$/i
handler.rowner = true

export default handler
