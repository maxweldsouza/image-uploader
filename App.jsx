import React from 'react';
import UploadForm from './UploadForm';
import Gallery from './Gallery';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            uploaded: false
        }
        this.onGallery = this.onGallery.bind(this);
    }
    onGallery () {
        this.setState({
            uploaded: true
        });
    }
    render() {
        return <div>
            <h1>Image uploader</h1>
            {this.state.uploaded ? <Gallery /> : <UploadForm />}
            <button onClick={this.onGallery}>Gallery</button>
        </div>;
    }
}
