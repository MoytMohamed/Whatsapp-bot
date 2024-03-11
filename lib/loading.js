export default async function displayLoadingScreen(conn, from) {
  const loadingStages = [
    "انـتـظـر 《 █▒▒▒▒▒▒▒▒▒▒▒》10%,",
    "انـتـظـر 《 ████▒▒▒▒▒▒▒▒》30%,",
    "انـتـظـر 《 ███████▒▒▒▒▒》50%,",
    "انـتـظـر 《 ██████████▒▒》80%,",
    "انـتـظـر 《 ████████████》100%,",
    "*انـتـهى الــتـحـمـيل !*"
  ];

  try {
    const { key } = await conn.sendMessage(from, { text: 'انـتـظـر...' });

    for (let i = 0; i < loadingStages.length; i++) {
      await conn.relayMessage(from, {
        protocolMessage: {
          key: key,
          type: 14,
          editedMessage: {
            conversation: loadingStages[i]
          }
        }
      }, {});
    }
  } catch (error) {
    console.error('Error displaying loading screen:', error);
  }
}
