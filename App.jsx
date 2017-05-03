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
            <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
                <div className="well">
                    <UploadForm onUpload={this.onUpload} />
                    {this.state.uploaded
                        ? <div>
                            <div className="alert alert-success" role="alert">
                                  Image uploaded successfully
                              </div>
                            <Gallery publicId={this.state.publicId} />
                        </div>
                        : null}
                </div>
            </div>
        );
    }
}
