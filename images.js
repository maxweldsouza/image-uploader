import cloudinary from 'cloudinary';
import path from 'path';
import config from './config.json';

cloudinary.config(config.cloudinary);

function imageLocalPath(fileName) {
    return path.join(__dirname, 'uploaded_images', fileName);
}

function publicIdFromFileName(fileName) {
    return path.basename(fileName, path.extname(fileName));
}

function saveLocally({ image, fileName }) {
    return new Promise((resolve, reject) => {
        image.mv(imageLocalPath(fileName), (e) => {
            if (e) {
                reject(e);
            } else {
                resolve();
            }
        });
    });
}

function upload(fileName) {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(
            imageLocalPath(fileName),
            (result) => {
                resolve(result);
            },
            {
                public_id: publicIdFromFileName(fileName),
                eager: [
                    { width: 755, height: 450, crop: 'fill', gravity: 'auto' },
                    { width: 365, height: 450, crop: 'fill', gravity: 'auto' },
                    { width: 365, height: 212, crop: 'fill', gravity: 'auto' },
                    { width: 380, height: 380, crop: 'fill', gravity: 'auto' },
                ],
            },
        );
    });
}

export async function saveAndUpload({ image, fileName }) {
    await saveLocally({ image, fileName });
    await upload(fileName);
    return publicIdFromFileName(fileName);
}
