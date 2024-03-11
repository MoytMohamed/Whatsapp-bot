let handler = m => m; 
  
 handler.all = async function (m) { 
   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^بوت$/i.test(m.text)) { 
     responses = [ 
 '*هــنا 🥱*',
 '*مــوجـود 😤*',
 '*عــايـز ايـه 🤨*',
 '*مــش فــاضـي 🎮*',
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       'وعليكم السلام',  
     ]; 
   }else if (/^غوجو|غوجو$/i.test(m.text)) { 
     responses = [ 
    '*هــنا 🥱*',
     '*مــوجـود 😤*',
     '*عــايـز ايـه 🤨*',
      '*مــش فــاضـي 🎮*',

  ];
     }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 
  
 export default handler;
