const multer = require("multer");
const {v4:uuidv4} = require("uuid");
const path = require("path");//Built in module.

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "./public/images/uploads");//destination folder for uploads.
    },
    filename: (req,file,cb)=>{
        const uniqueFilnename = uuidv4();//generating a unique file name using uuid.
        cb(null, uniqueFilnename+path.extname(file.originalname));//use the unique file name for the uploaded file.
    }
})

//path.extname()-gives extension of the file
//file.originalname-gives the name of the file
//Therefore, path.extname(file.originalnam)

const upload = multer({storage:storage});

module.exports= upload;