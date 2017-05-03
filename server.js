import express from 'express';
import path from 'path';
import fileUpload from 'express-fileupload';
import * as images from './images';

const app = express();
app.use(fileUpload());

app.use('/static', express.static(path.join(__dirname, 'dist', 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.post('/upload', async (req, res) => {
    try {
        if (!req.files) {
            return res.status(400).send('No image uploaded.');
        }

        const publicId = await images.saveAndUpload({
            image: req.files.image,
            name: req.files.image.name,
        });

        return res.json({ publicId });
    } catch (e) {
        console.trace(e);
        return res.status(500).send('Something went wrong');
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
