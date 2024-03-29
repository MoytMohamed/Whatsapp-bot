import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {

  let lodushek = await conn.sendMessage(m.chat, {text: '*جــاري الــتــحــقق...!*'})

  let timestamp = speed()

  await exec('neofetch --stdout', async (error, stdout) => {

    let latency = (speed() - timestamp).toFixed(4)

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lodushek.key,
        type: 14,
        editedMessage: {
          conversation: `الــســرعــة: ${latency} ms` 
        }
      }
    }, {})

  })

}

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['السرعه', 'السرعة'] 

export default handler