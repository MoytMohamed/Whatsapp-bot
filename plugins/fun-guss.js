import _0x558a5f from 'fs';
let handler = async (_0x41441c, {
  conn: _0x35b462,
  usedPrefix: _0x4f81af
}) => {
  _0x35b462.tekateki = _0x35b462.tekateki ? _0x35b462.tekateki : {};
  let _0x2be468 = _0x41441c.chat;
  if (_0x2be468 in _0x35b462.tekateki) {
    _0x35b462.reply(_0x41441c.chat, "*يجب ان تحل السؤال السابق اولا*", _0x35b462.tekateki[_0x2be468][0x0]);
    throw false;
  }
  let _0x3dfc1e = JSON.parse(_0x558a5f.readFileSync("./src/game/acertijo.json"));
  let _0x3178d5 = _0x3dfc1e[Math.floor(Math.random() * _0x3dfc1e.length)];
  let _0x57b192 = ("*السؤال: " + _0x3178d5.question + "\n\n*the time: " + 60 .toFixed(0x2) + "*\n*the prize: " + 0x1f4 + "*\nIZANA").trim();
  _0x35b462.tekateki[_0x2be468] = [await _0x35b462.reply(_0x41441c.chat, _0x57b192, _0x41441c), _0x3178d5, 0x1f4, setTimeout(async () => {
    if (_0x35b462.tekateki[_0x2be468]) {
      await _0x35b462.reply(_0x41441c.chat, "*\u276E \u231B\u2507\u0627\u0646\u062A\u0647\u064A \u0627\u0644\u0648\u0642\u062A\u2507\u231B\u276F*\n *\u2750\u219E\u2507\u0627\u0644\u0627\u062C\u0640\u0627\u0628\u0640\u0629\u2705\u219E " + _0x3178d5.response + '┇*', _0x35b462.tekateki[_0x2be468][0x0]);
    }
    delete _0x35b462.tekateki[_0x2be468];
  }, 0xea60)];
};
handler.help = ["acertijo"];
handler.tags = ['game'];
handler.command = /^(سؤال_انمي|سؤال)$/i;
export default handler;