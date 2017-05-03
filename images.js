import cloudinary from 'cloudinary';
import path from 'path';
import config from './config';

cloudinary.config(config.cloudinary);

export function save_locally(image) {
    return new Promise((resolve, reject) => {
        let image_location = path.join(__dirname, 'uploaded_images', image.name);
        image.mv(image_location, (e) => {
            if (e) {
                reject(e);
            } else {
                resolve();
            }
        })
    });
}

export function upload(image, public_id) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            req.files.myImage.path,
            {
                public_id,
                eager: [
                    { width: 755, height: 450, crop: 'fill', gravity: 'auto'},
                    { width: 365, height: 450, crop: 'fill', gravity: 'auto'},
                    { width: 365, height: 212, crop: 'fill', gravity: 'auto'},
                    { width: 380, height: 380, crop: 'fill', gravity: 'auto'},
                ],
                eager_async: true,
                tags: ['special', 'for_homepage']
            },
            function(error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            },
        );
    })
}
