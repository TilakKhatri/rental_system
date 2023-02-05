const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/post');
const bookRoutes = require('./routes/bookusers');
const multer = require('multer');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/posts', postRoutes);
app.use('/api/booking', bookRoutes);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../rental/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})
const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file;
    // console.log(file.filename)
    res.status(200).json(file.filename);
});

app.use('/', (req, res) => {
    res.send("Server connected.");
});

app.listen(8000, () => {
    console.log("Server connected at port 8000");
    console.log(`http://localhost:8000`);
})