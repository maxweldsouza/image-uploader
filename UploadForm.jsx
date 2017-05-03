import React, {PropTypes} from 'react';

export default class UploadForm extends React.Component {
    render() {
        return <form ref='uploadForm'
            id='uploadForm'
            action='http://localhost:3000/upload'
            method='post'
            encType="multipart/form-data">

            <input type="file" name="image" />
            <input type='submit' value='Upload' />
        </form>;
    }
}

UploadForm.propTypes = {};
