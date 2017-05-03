import express from 'express';
import fileUpload from 'express-fileupload';

let app = express();
app.use(fileUpload());

app.get('/', function(req,res) {
    res.sendfile('index.html');
});

app.post('/upload', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    console.log(req.files.image);
    res.send('File uploaded!');
});

app.listen(3000, function () {
    console.log('listening on port 3000!');
});
