// Command handler for the 'calculate' command
let handler = async (m, { conn }) => {
  let messageCount = 0; // Variable to store the message count

  // Event listener for incoming messages
  conn.request('message-new', (message) => {
    const today = new Date(); // Get the current date
    const messageDate = new Date(message.timestamp * 1000); // Convert message timestamp to date

    // Check if the message date is the same as today
    if (messageDate.toDateString() === today.toDateString()) {
      messageCount++; // Increment the message count
    }
  });

  // Get the message count for the current day
  const count = messageCount;

  // Send the calculated message count as a reply
  conn.reply(m.chat, `Messages sent today: ${count}`, m);
};

handler.help = ['calculate'];
handler.tags = ['tools'];
handler.command = ['c5'];
handler.admin = true;
handler.group = true;

export default handler;