const express = require("express")
const ejs = require('ejs')
const cloudinary = require("cloudinary");
require("dotenv").config();
require("./handlers/cloudinary");
// const exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

const app = express();

const upload = require("./handlers/multer");

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get("/", function (req, res) {
 res.render('main.ejs')
})

app.post("/uploads", upload.single("image"), async (req, res) => {
 const result = await cloudinary.v2.uploader.upload(req.file.path);
 res.send(`<p>File uploaded</p><br>${result}`);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => { console.log(`Server started on ${PORT}`); });