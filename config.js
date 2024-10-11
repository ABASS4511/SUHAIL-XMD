const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_49_10_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMixcbiAgICAgICAgMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgODQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTQxLFxuICAgICAgICAzNixcbiAgICAgICAgODQsXG4gICAgICAgIDQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1LFxuICAgICAgICA2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDMyLFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNQVlgvMUs4ZHZNZEtHWUtmbWd3SDliZUwxTElzUUp0MUpWbU8wdi9UQ009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpQZGNWMndoU2dHeUJSUjF0SzRjYWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2NmNTQ4Y2UtNGJiMS00MDMwLTkxMDYtNzI2MWI2M2MzNWUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMjI1LFxuICAgICAgNjEsXG4gICAgICAxODYsXG4gICAgICAxOTgsXG4gICAgICAxODQsXG4gICAgICAyMTAsXG4gICAgICA2MyxcbiAgICAgIDE4NixcbiAgICAgIDE1OSxcbiAgICAgIDE0NSxcbiAgICAgIDE5MSxcbiAgICAgIDEyNixcbiAgICAgIDI1NSxcbiAgICAgIDYxLFxuICAgICAgMjA3LFxuICAgICAgMjQyLFxuICAgICAgMTYyLFxuICAgICAgNSxcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAxNTgsXG4gICAgICA1MyxcbiAgICAgIDE1MCxcbiAgICAgIDE3MyxcbiAgICAgIDEzMSxcbiAgICAgIDE0OCxcbiAgICAgIDcxLFxuICAgICAgMjM1LFxuICAgICAgNDAsXG4gICAgICA4OSxcbiAgICAgIDIzLFxuICAgICAgMTIwLFxuICAgICAgMjQ0LFxuICAgICAgMTAxLFxuICAgICAgMTUzLFxuICAgICAgOTMsXG4gICAgICAyMDIsXG4gICAgICA3NyxcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQNUNBUDVSNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1MDUwMDk4ODM5MTo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgxNDA2OTg2NjkwODAyOjQyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BHVDQ3Z0VFT3E5cExnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZmZ5bnc5Uk02UjVZMVdrQ2dUeElubHVCN0twaGRsNGltVWxQQzRHK0huMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2TjEwYXhuOTlZMTJZMlBhSjVsMnp6VFg3dVlSVjcwNnNyU2tWS0tWdlZTdG5nU3N5MEl0OVY0bGViaTFoTk5raXRUWjlZWVFPU05NZDMrUnZ6VjNEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGd0ZzVExDNXJVNkpTRTgzVEdwU2s2a1lHcFZ2aU1naWYxM3o0VVBySjlIMk94Y2M3UnBUZUtnRmlscCtOUHozcnZFc2pvYUl0Smx6end3QUpWaC9CZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjUwNTAwOTg4MzkxOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NjUwOTg5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
