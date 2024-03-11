export async function all(m) {
	
  // when someone sends a group link to the bot's dm
  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
   this.sendMessage(m.chat,{text:`تقدر تكلم المطور اذا اردت البوت الدخول الى مجموعتك\n\n*اكتب* *.المطور* *للتواصل مع المطور*`.trim()}, {quoted:m});
} 

 return !0
}