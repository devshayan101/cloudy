const express = require("express")
//const ejs = require('ejs')
const cloudinary = require("cloudinary");
require("dotenv").config();
require("./handlers/cloudinary");
const exphbs = require('express-handlebars');

const app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



const upload = require("./handlers/multer");



//app.set('view engine', 'ejs');


app.get("/", function (req, res) {
 res.render('index')
})

app.post("/uploads", upload.single("image"), async (req, res) => {
 const result = await cloudinary.v2.uploader.upload(req.file.path);
 res.send(result);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => { console.log(`Server started on ${PORT}`); });