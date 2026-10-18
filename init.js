const mongoose = require('mongoose');
const Chat = require("./models/chat.js");


main().then(()=>{
    console.log("successfull completed")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
};

let allChats = [
    {
  from:"mudassir",
  to:"raiyan",
  msg:"helllo exam kab se hai apku mlm kya",
  created_at: new Date(),
},{
     from:"rehan",
  to:"md",
  msg:"helllo apku mlm kya",
  created_at: new Date(),
},{
     from:"riyan",
  to:"raiyan",
  msg:"helllo exam kab ",
  created_at: new Date(),
},{
     from:"pushpa",
  to:"raaaraaa",
  msg:"mudassir apku mlm kya",
  created_at: new Date(),
}
];

Chat.insertMany(allChats);