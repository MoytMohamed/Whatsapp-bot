import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  const name = conn.getName(m.sender);
  if (!text) {
    throw `*هــلا ${name}*\n*هـــكذا: ${usedPrefix + command}* السلام عليكم`;
  }

  m.react('🗣️');

 const senderNumber = m.sender.replace(/[^0-9]/g, ''); 
  const session = `GURUBOT${senderNumber}`;
  const uid = encodeURIComponent(session);
  const msg = encodeURIComponent(text);

  const res = await fetch(`https://qin-guru-rin-indratensei.cloud.okteto.net/dm?message=${msg}&conversationID=${uid}`);
  const json = await res.json();


    let reply = json.response;
      if (reply) {
    reply = reply.replace(/Clyde/gi, 'Guru Bot');
    reply = reply.replace(/ladiboi/gi, name);
    reply = reply.replace(/discord|OpenAI/gi, 'Guru-Botz');
    reply = reply.replace(/surbhisayshi/gi, 'Guru');
    reply = reply.replace(/\bthe server\b/gi, 'me'); 
    reply = reply.replace(/\bserver\b/gi, '');

m.reply(reply);
}
};

handler.help = ['bot'];
handler.tags = ['fun'];
handler.command = ['بوت', 'يحب'];

export default handler;