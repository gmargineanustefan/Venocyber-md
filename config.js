//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "255625774543";
global.owner = process.env.OWNER_NUMBER || "255625774543";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBVLzNoY1YyOFB5THJhbXpHVUhGbU9CUG83N290MnlDOGJEVlh1dURsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVM3WVN0V2IvL1poTDQ4VHRNUEhMcC93OGZuYVNIdUU3SWg5Y01rQ1JXND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QUtwSkVKdVhCMmZIRXlrRkt2UGk3cFFHK3FUNklBR1h3bHBYR2N1bG0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJelhqVjZaMG5vTVkrRzQ4d0tmVklRWHpuMDN4bmk4dkR2dElWajNIdURzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJDU1dSVFB2K05US1o5RGtwckdSdGR2WXNwU2JhZXk0VEFscmFiZHdVMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtYWXBGZlh5c25tczVpemVKTitNNEhMNVBvWDl5eGx3eUxUOEtGNHRIRUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdXQ3F4Yzl1a1hNQkRKYTZzZnhsYlBWYytMNHJLa25pOE50dmZGbFkyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid25DVFBaT2R0WkZyWmxuM281dU94Ulk4SDFMdHo3b3NlbWFscWJHZ2l6Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InplaFZmOGRkNFdlYTZzTG84aytkR0pQYVh1bzA1VjNkMjJHOGlCUVFMUmhwMVphRkh2UTV2eXlJbnAzZERTMXF5OGVNcXhmTVMvMG1iMVBQNjJEV0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUxLCJhZHZTZWNyZXRLZXkiOiJJbC9oUFdhd1dqKzhFM1VGQkNmckR4UlJrU1psbWtJaXRVdGtsYUoveUY0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjM1Nzk1MTcxMzU3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEzRDlEMzYwMEQxQkU5MUQ0NkUxRTZGRTgwMjk3MTJGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTc2MjQ3MzB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjM1Nzk1MTcxMzU3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUzNkY2OTAyNEFBMjg5NDU1NUYyNzI3QzlGMzg5N0FBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTc2MjQ3MzB9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjRvQkpTOG8yVFBpcmw5TzZGUHkxVnciLCJwaG9uZUlkIjoiMTEyMjRmZGYtZDQ0Zi00M2Q2LWIwNTItNTkwMGI2NDAxYzU5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlArRlRQUHFYVWx5cVJzelRDb0FWTm9DYkJZST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmc25JQml0YVVhNTNwQmJSekJvZHpEVGFPSTg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjExOVdFWFAiLCJtZSI6eyJpZCI6IjM1Nzk1MTcxMzU3OjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1pdHJvaSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUQxaHA0REVJbS9nN01HR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWGZEL0lZbk1NaGM0Qk1NRnlMOW1IaDh5bnB6b0Z1ZFdWZjNoRXo5cHBWdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ2tKOEtSYVluTTBJY2FQZTVvZ0RscHpDc1RwbEFZeVlUTi9FejgrR0pFUjF5Z1U2ZnNaczlzK2xseFNIS1NzQVdKdnFSS3FvYVVqSklVVVQ3MmZPREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlkzN04vZFo0WEJhUzRmOHBNYkd1NnhLTUY2OEhiVitpbkcrb3IxL05uU2p6Vjk2QjFCZE1NZzE3c3VNRzhidWdoUldXejZlS0VPN3h3Vm9FODl6TENBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzU3OTUxNzEzNTc6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjN3L3lHSnpESVhPQVREQmNpL1poNGZNcDZjNkJiblZsWDk0Uk0vYWFWYyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzYyNDcyNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMLzMifQ==
"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑-𝐌𝐃 ╠════ need support then ☞ https://rb.gy/izabex ═════╣",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
