import _0x258423 from 'similarity';
let handler = _0x4c714c => _0x4c714c;
handler.before = async function (_0x488658) {
  let _0x161fde = _0x488658.chat;
  if (!_0x488658.quoted || !_0x488658.quoted.fromMe || !_0x488658.quoted.isBaileys || !/^ⷮ/i.test(_0x488658.quoted.text)) {
    return true;
  }
  this.tekateki = this.tekateki ? this.tekateki : {};
  if (!(_0x161fde in this.tekateki)) {
    return _0x488658.reply("*انــتـهـى الــسـؤال !*");
  }
  if (_0x488658.quoted.id == this.tekateki[_0x161fde][0x0].id) {
    let _0x268cf8 = JSON.parse(JSON.stringify(this.tekateki[_0x161fde][0x1]));
    if (_0x488658.text.toLowerCase() == _0x268cf8.response.toLowerCase().trim()) {
      global.db.data.users[_0x488658.sender].exp += this.tekateki[_0x161fde][0x2];
      _0x488658.reply("*❐┃اجـابـة صـحـيـحـة┃✅ ❯*\n*❐↞┇الـجـائـزة💰↞ " + this.tekateki[_0x161fde][0x2] + "نــقـطـة ┇*");
      clearTimeout(this.tekateki[_0x161fde][0x3]);
      delete this.tekateki[_0x161fde];
    } else {
      if (_0x258423(_0x488658.text.toLowerCase(), _0x268cf8.response.toLowerCase().trim()) >= 0.72) {
        _0x488658.reply("*انــتـهـى الــسـؤال !*");
      } else {
        _0x488658.reply("\u2750\u2503\u0627\u062C\u0640\u0627\u0628\u0640\u0629 \u062E\u0640\u0627\u0637\u0640\u0626\u0640\u0629\u2503\u274C \u276F");
      }
    }
  }
  return true;
};
handler.exp = 0x0;
export default handler;