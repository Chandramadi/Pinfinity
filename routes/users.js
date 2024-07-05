const mongoose = require("mongoose");
const plm = require('passport-local-mongoose');//auth code

const path = "mongodb://127.0.0.1:27017/pinterestDb";
mongoose.connect(path);

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique:true,
    required: true,
  },
  password: {
    type: String,
  },
  dp: {//Assuming the profile picture is saved as a url or file path.
    type: String
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  }],
  boards:{
    type:Array,
    default:[],
  },
})

userSchema.plugin(plm);//auth code

module.exports = mongoose.model("User", userSchema);
