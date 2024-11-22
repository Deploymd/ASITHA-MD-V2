const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=C2Iz0BJB#ZqigI35fZ33iMcb7lHUF2lfjGVw2w7MqOBElQYZlXSc' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
ALIVE_MSG: process.env.ALIVE_MSG === undefined ? "*Hello , 𝚒 𝚊𝚖 𝚌𝚢𝚋𝚎𝚛 𝚔𝚊𝚟𝚒𝚢𝚊 𝚜𝚊𝚟𝚎 𝚖𝚎...𝚏𝚘𝚛 𝚓𝚞𝚜𝚝 𝚗𝚘𝚠 𝚜𝚝𝚊𝚝𝚞𝚜 𝚊𝚞𝚝𝚘 𝚜𝚎𝚎𝚗*" : process.env.ALIVE_MSG,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS,
MODE: process.env.MODE === undefined ?"public" : process.env.MODE,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? "true" : process.env.AUTO_VOICE,
AUTO_REPLY: process.env.AUTO_REPLY === undefined ? "true" : process.env.AUTO_REPLY,
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? "true" : process.env.AUTO_STICKER,
ANTI_BAD: process.env.ANTI_BAD === undefined ? "true" : process.env.ANTI_BAD,
ANTI_LINK: process.env.ANTI_LINK === undefined ? "true" : process.env.ANTI_LINK,
ANTI_BOT: process.env.ANTI_BOT === undefined ? "true" : process.env.ANTI_BOT,
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE === undefined ? "false" : process.env.ALLWAYS_OFFLINE,
READ_CMD: process.env.READ_CMD === undefined ? "true" : process.env.READ_CMD,
RECORDING: process.env.RECORDING === undefined ? "true" : process.env.RECORDING,
AUTO_REACT: process.env.AUTO_REACT === undefined ? "false" : process.env.AUTO_REACT,
NEWS_JID: process.env.NEWS_JID === undefined ? "120363345216596571@g.us" : process.env.NEWS_JID,
BAD_NO_BLOCK: process.env.BAD_NO_BLOCK === undefined ? "false" : process.env.BAD_NO_BLOCK,  
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
};
