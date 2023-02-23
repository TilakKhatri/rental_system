const express = require('express');
const cors = require('cors');
const multer = require('multer');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();

const postRoutes = require('./routes/post');
const bookRoutes = require('./routes/bookusers');
const authRoutes = require('./routes/auth');
const serveRoute = require('./routes/serve');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({

        secret: "hello",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        }
    })
);
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/booking', bookRoutes);
app.use('/api/serving', serveRoute);

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