import {GoogleGenerativeAI} from '@google/generative-ai'
import displayLoadingScreen from '../lib/loading.js'
const genAI = new GoogleGenerativeAI('AIzaSyDJC5a882ruaC4XL6ejY1yhgRkN-JNQKg8');


let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw `*عــلـى مـاذا تـريـدنـي أن انـصـحـك !*`
    m.react('🤖')
    await displayLoadingScreen(conn, m.chat)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = text

    const result = await model.generateContent(prompt);
    const response = result.response;
    const textt = response.text();
    m.reply(textt)
  } catch (error) {
    console.error(error);
    m.reply('*عــلـى مـاذا تـريـدنـي أن انـصـحـك !*');
  }
}
handler.help = ['gemini <text>']
handler.tags = ['tools']
handler.command = /^(انصحني)$/i

export default handler