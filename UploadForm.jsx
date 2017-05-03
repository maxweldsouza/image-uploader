import React from 'react';

function getImageDimensions(image) {
    const img = new Image();
    const URL = window.URL || window.webkitURL;
    return new Promise((resolve) => {
        img.onload = () => {
            window.URL.revokeObjectURL(img.src);
            resolve({ width: img.naturalWidth, height: img.naturalHeight });
        };
        img.src = URL.createObjectURL(image);
    });
}

async function validateImage(image) {
    const { width, height } = await getImageDimensions(image);
    return width >= 1024 && height >= 1024;
}

export default class UploadForm extends React.Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onImageSelect = this.onImageSelect.bind(this);
        this.state = {
            uploading: false,
            error: '',
        };
    }
    async onImageSelect() {
        const image = this.imageInput.files[0];
        const imageValid = await validateImage(image);
        this.setState({
            error: imageValid ? '' : 'The image should be atleast 1024 x 1024 px in size',
        });
    }
    async onSubmit(e) {
        e.preventDefault();
        this.setState({
            uploading: true,
        });
        const image = this.imageInput.files[0];

        const formData = new FormData();
        formData.append('image', image);
        const r = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData,
        });
        const data = await r.json();
        this.setState({
            uploading: false,
        });
        this.props.onUpload(data.publicId);
    }
    render() {
        return (
            <div>
                <h1>Image uploader</h1>
                {this.state.error
                    ? <div className="alert alert-danger" role="alert">
                        {this.state.error}
                    </div>
                    : null}
                <form
                    action="/upload"
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={this.onSubmit}
                >
                    <div className="form-group">
                        <input
                            type="file"
                            name="image"
                            onChange={this.onImageSelect}
                            ref={(input) => {
                                this.imageInput = input;
                            }}
                        />
                    </div>
                    {this.state.uploading ? 'Uploading...' : null}
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Upload"
                            className="btn btn-primary"
                            disabled={Boolean(this.state.error)}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
