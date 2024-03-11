import { tiktokdl } from '@bochilteam/scraper';
import fg from 'api-dylux';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) throw `*ادخــل مــع الأمــر رابـــط !*`;
  if (!args[0].match(/tiktok/gi)) throw `*تــأكــد مـن انــه رابــط تــيكــتـوك !*`;
  m.react('🕛')


  let txt = '*الــفــيديــو !*';
  
  try {
    const { author: { nickname }, video, description } = await tiktokdl(args[0]);
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;

    if (!url) throw global.error;

    conn.sendFile(m.chat, url, 'tiktok.mp4', txt, m);
     m.react('✅')
  } catch (err) {
    try {
      let p = await fg.tiktok(args[0]);
      conn.sendFile(m.chat, p.play, 'tiktok.mp4', `*حــدثــت مــشكـلــة مــا !*`, m);
       m.react('❌')
    } catch {
      m.reply('*حــدثــت مــشكـلــة مــا !*');
    }
  }
};

handler.help = ['tiktok'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = ['تيك', 'تيكتوك'];
handler.diamond = true;

export default handler;