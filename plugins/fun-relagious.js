import _0x5c173e from 'fs';
let handler = async (_0x1e5785, {
  conn: _0xa88de4,
  usedPrefix: _0x111abb
}) => {
  _0xa88de4.tekateki = _0xa88de4.tekateki ? _0xa88de4.tekateki : {};
  let _0x554c13 = _0x1e5785.chat;
  if (_0x554c13 in _0xa88de4.tekateki) {
    _0xa88de4.reply(_0x1e5785.chat, "*❪مــازال هــنـاك سـؤال لــم يــجـاب !❫*", _0xa88de4.tekateki[_0x554c13][0x0]);
    throw false;
  }
  let _0x5af87a = JSON.parse(_0x5c173e.readFileSync('./src/game/quran.json'));
  let _0x14641f = _0x5af87a[Math.floor(Math.random() * _0x5af87a.length)];
  let _0x263b98 = ("\n\n\u2DEE " + _0x14641f.question + "\n*┏━━━━━━❄━━━━━━┓*\n*❍⤪┇ الــوقــت ⌚ ❪" + 60 .toFixed(0x2) + "❫ ثــانـيـة*\n\n*❍⤪┇ الــجـائــزة ⚡ ❪" + 0x1f4 + " ❫ نــقـطـه*\n*┗━━━━━━❄━━━━━━┛*").trim();
  _0xa88de4.tekateki[_0x554c13] = [await _0xa88de4.reply(_0x1e5785.chat, _0x263b98, _0x1e5785), _0x14641f, 0x1f4, setTimeout(async () => {
    if (_0xa88de4.tekateki[_0x554c13]) {
      await _0xa88de4.reply(_0x1e5785.chat, "*\u276E \u231B\u2507\u0627\u0646\u062A\u0647\u064A \u0627\u0644\u0648\u0642\u062A\u2507\u231B\u276F*\n *\u2750\u219E\u2507\u0627\u0644\u0627\u062C\u0640\u0627\u0628\u0640\u0629\u2705\u219E " + _0x14641f.response + '┇*', _0xa88de4.tekateki[_0x554c13][0x0]);
    }
    delete _0xa88de4.tekateki[_0x554c13];
  }, 0xea60)];
};
handler.help = ["acertijo"];
handler.tags = ["game"];
handler.command = /^(دينيه|دين)$/i;
export default handler;