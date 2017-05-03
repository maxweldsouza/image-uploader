import cloudinary from 'cloudinary';
import path from 'path';
import config from './config.json';

cloudinary.config(config.cloudinary);

function imageLocalPath(name) {
    return path.join(__dirname, 'uploaded_images', name);
}

function saveLocally({ image, name }) {
    return new Promise((resolve, reject) => {
        image.mv(imageLocalPath(name), (e) => {
            if (e) {
                reject(e);
            } else {
                resolve();
            }
        });
    });
}

function upload(name) {
    const publicId = path.basename(name, path.extname(name));
    return new Promise((resolve) => {
        cloudinary.uploader.upload(
            imageLocalPath(name),
            (result) => {
                resolve(result);
            },
            {
                public_id: publicId,
                eager: [
                    { width: 755, height: 450, crop: 'fill', gravity: 'auto' },
                    { width: 365, height: 450, crop: 'fill', gravity: 'auto' },
                    { width: 365, height: 212, crop: 'fill', gravity: 'auto' },
                    { width: 380, height: 380, crop: 'fill', gravity: 'auto' },
                ],
                eager_async: true,
            },
        );
    });
}

export async function saveAndUpload({ image, name }) {
    await saveLocally({ image, name });
    // await upload(name);
}
