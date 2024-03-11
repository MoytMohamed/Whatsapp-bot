import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command, match, send }) => {
try {
    match = match || m.reply_message.text;
    if(!match) return await m.reply(lang.BASE.TEXT);
    const res = await fetchJson(BASE_URL+'api/lyrics?text='+match);
    if(!res.status) return m.reply(lang.BASE.ERROR.format("غــير مــوجــود !"));
    if(!res.result) return m.reply(lang.BASE.ERROR.format("*جــرب لاحــقاً*"));
    const { thumb,lyrics,title,artist } = res.result, tbl= "```", tcl ="*", tdl = "*";
        const msg = lang.LYRICS.RESPONCE.format(tcl+artist+tdl,tcl+title+tdl)+`\n\n${tbl}${lyrics}${tbl}`;
        return await m.sock.sendMessage(m.from, {
            image: {url : thumb},
            caption :msg
        }, {
            quoted: m
        })
    } catch (e) {
   return await m.reply("");
   }
 }
handler.help = ['ytmp3 <url>']
handler.tags = ['dl']
handler.command = ['الكلمات'] 

export default handler