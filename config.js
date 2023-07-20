/**Penjelasan: Untuk menggunakan script ini, kamu akan perlu mengganti nomor owner dan wm terlebih dahulu. Kamu juga harus memiliki api key tersebut dari kedua website ini https://api.botcahx.live dan https://api.betabotz.me. Setelah memiliki api key, kamu bisa menggantinya dengan menyalin key tersebut dari profilmu dan paste di variabel global.btc. Contohnya, global.btc = 'xzRhejka'. Setelah itu, kamu bisa melanjutkan dengan mengubah nomor owner dan wm.

Penjelasan selanjutnya adalah untuk mengisi variabel global.mongo, yang merupakan konfigurasi untuk menghubungkan dengan database MongoDB. Jika kamu tidak memerlukan koneksi database atau tidak memiliki akses ke MongoDB, maka variabel ini bisa diisi dengan nilai null atau tidak perlu diisi sama sekali. Namun, jika kamu ingin menggunakan database, variabel global.mongo harus diisi dengan nilai yang benar agar script bisa berjalan dengan baik.  
**/


global.owner = ['601169466091']  
global.mods = ['601169466091'] 
global.prems = ['601169466091']
global.nameowner = 'Putbotz'
global.numberowner = '601169466091' 
global.mail = 'putbot604@gmai.com' 
global.dana = '601169466091'
global.pulsa = '601169466091'
global.gopay = '601169466091'
global.namebot = 'Putbotz'
global.gc = 'https://chat.whatsapp.com/Ln2vHjRrRayAbzalRMB56r'
global.web = 'https://github.com/Putbotz'
global.instagram = 'https://instagram.com/whooputt'
global.wm = '© Putbotz'
global.watermark = wm
global.wm2 = '⫹⫺ Putbotz'
global.wm3 = '© Putbotz'
global.wm4 = '© Putbotz'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made by'
global.author = 'Putbotz'
global.alpiskey = 'YOUR_APIKEY_HERE' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'putxd' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'bgBDQO82' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.betabotz.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'YOUR_APIKEY_HERE' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
