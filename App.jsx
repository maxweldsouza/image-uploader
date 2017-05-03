import React from 'react';
import UploadForm from './UploadForm';
import Gallery from './Gallery';

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
            <div className="container" style={{marginTop: '50px'}}>
                {this.state.uploaded
                    ? <Gallery publicId={this.state.publicId} />
                    : <UploadForm onUpload={this.onUpload} />}
            </div>
        );
    }
}
