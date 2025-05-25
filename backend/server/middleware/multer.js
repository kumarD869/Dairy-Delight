const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination:function(req,file,cb){
       cb(null,path.join(__dirname,"..","public","uploads"))
    },
    filename:function(req,file,cb){
      const suffix = Date.now() + "-" + Math.round(Math.random()*100)
      const pathext = path.extname(file.originalname)
      cb(null,suffix + "-" + pathext)
    }
})

const upload = multer({storage})

module.exports = upload