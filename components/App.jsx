import React from 'react';
import UploadForm from './UploadForm';
import Gallery from './Gallery';
import Alert from './Alert';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            uploaded: false,
            publicId: '',
        };
        this.onUpload = this.onUpload.bind(this);
    }
    onUpload(publicId) {
        this.setState({
            uploaded: true,
            publicId,
        });
    }
    render() {
        return (
            <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
                <div className="well">
                    <h1>Image uploader</h1>
                    <UploadForm onUpload={this.onUpload} />
                    {this.state.uploaded
                        ? <div>
                            <Alert type="success" message="Image uploaded successfully" showing />
                            <Gallery publicId={this.state.publicId} />
                        </div>
                        : null}
                </div>
            </div>
        );
    }
}
