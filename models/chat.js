const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        require:"true",
    },
    to:{
        type:String,
        require:"true",
    },
    msg:{
        type:String,
        default:0,
    },
    created_at: {
       type: Date,
       require:"true"
    }
});

const Chat = mongoose.model("chat",chatSchema);

module.exports= Chat;