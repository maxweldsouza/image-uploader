import React from 'react';
import UploadForm from './UploadForm';
import Gallery from './Gallery';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            uploaded: false,
        };
        this.onUpload = this.onUpload.bind(this);
    }
    onUpload() {
        this.setState({
            uploaded: true,
        });
    }
    render() {
        return (
            <div>
                <h1>Image uploader</h1>
                {this.state.uploaded ? <Gallery /> : <UploadForm onUpload={this.onUpload} />}
                <button onClick={this.onUpload}>Gallery</button>
            </div>
        );
    }
}
