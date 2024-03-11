import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

//Number of owners
global.owner = [
  ['201206178781', '𝐌 𝐎 𝐘 𝐓', true],
  ['967780835667', 'Joker Sensi', true],
] 

// Mods
global.mods = ['201206178781', '201223089789'] 
global.prems = ['201206178781', '201223089789']

// Sticker WM
global.ownername = '𝐌 𝐎 𝐘 𝐓'
global.botname = 'مــايــكـي'
global.premium = 'true'
global.packname = '' 
global.author = '' 
global.wa = ''


global.APIs = {
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = {
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Fun
global.wait = '*⌛ انـــتـظر ▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '😊'
global.done = '🍁'
global.error = '❌' 
global.xmoji = '☘️' 

global.multiplier = 69 
global.maxwarn = '3' // maxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
