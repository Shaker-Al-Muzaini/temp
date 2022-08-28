require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authenticate = require('./middleware/jwt');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './uploads/userfiles/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname.replace(" ", "-").replace(path.extname(file.originalname), "") + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
  
const upload = multer({ storage: storage })


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ ping: "pong" });
})

app.post('/image/upload', authenticate, upload.single("image"), (req, res) => {
    if (!req.file) return res.json({ error: "Please upload an image" });
    res.json({ image: req.file.filename });
})

app.use("/uploads", express.static("uploads"));
const userRoutes = require('./routes/user');
const jewelryRoutes = require('./routes/jewelry');
const eventsRoutes = require('./routes/event');
const lifestylesRoutes = require('./routes/lifestyle');
const piecesRoutes = require('./routes/pieces');
const photoshootRoutes = require('./routes/photoshoot');
const sliderRoutes = require('./routes/slider');
const magazineRoutes = require('./routes/magazine');
const watchRoutes = require('./routes/watch');
const celebrityRoutes = require('./routes/celebrity');
const tvRoutes = require('./routes/tv');
const bannerRoutes = require('./routes/banner');
const newsRoutes = require('./routes/news');
const newsletterRoutes = require('./routes/newsletter');
const cmsPageRoutes = require('./routes/cmspage');
const settingsRoutes = require('./routes/setting');
const contactRoutes = require('./routes/contact');

app.use('/users', userRoutes);
app.use('/jewelry', jewelryRoutes);
app.use('/events', eventsRoutes);
app.use('/lifestyles', lifestylesRoutes);
app.use('/pieces', piecesRoutes);
app.use('/photoshoots', photoshootRoutes);
app.use('/sliders', sliderRoutes);
app.use('/magazines', magazineRoutes);
app.use('/watches', watchRoutes);
app.use('/celebrities', celebrityRoutes);
app.use('/tvs', tvRoutes);
app.use('/banners', bannerRoutes);
app.use('/news', newsRoutes);
app.use('/newsletters', newsletterRoutes);
app.use('/cmspages', cmsPageRoutes);
app.use('/settings', settingsRoutes);
app.use('/contacts', contactRoutes);


app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT || 4000}`);
})
