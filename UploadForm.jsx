import React from 'react';

export default class UploadForm extends React.Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        this.submitForm();
    }
    async submitForm() {
        const formData = new FormData();
        formData.append('image', this.imageInput.files[0]);
        const r = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData,
        });
        const data = await r.json();
        this.props.onUpload(data.publicId);
    }
    render() {
        return (
            <div className="well">
                <h1>Image uploader</h1>
                <form
                    id="uploadForm"
                    action="http://localhost:3000/upload"
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={this.onSubmit}
                >
                    <div className='form-group'>
                        <input type="file" name="image" ref={(input) => { this.imageInput = input; }} />
                    </div>
                    <div className='form-group'>
                        <input type="submit" value="Upload" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
