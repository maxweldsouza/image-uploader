import express from 'express';
import fileUpload from 'express-fileupload';
import * as images from './images';

const app = express();
app.use(fileUpload());

app.get('/', (req, res) => {
    res.sendfile('index.html');
});

app.post('/upload', async (req, res) => {
    try {
        if (!req.files) return res.status(400).send('No files were uploaded.');
        console.log(req.files.image);

        await images.saveAndUpload({
            image: req.files.image,
            name: req.files.image.name,
        });

        return res.send('File uploaded!');
    } catch (e) {
        console.log(e);
        console.trace(e);
    }
});

app.listen(3000, () => {
    console.log('listening on port 3000!');
});
