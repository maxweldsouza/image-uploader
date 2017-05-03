import React from 'react';
import { Image } from 'cloudinary-react';

export default class Gallery extends React.Component {
    render() {
        return (<div>
            <h2>Uploaded Images</h2>
            <h3>Vertical 365 x 450</h3>
            <Image cloudName="comparnion" publicId="Aldrin_Apollo_11" width="365" height="450" crop="fill" gravity="auto" />
            <h3>Horizontal 755 x 450</h3>
            <Image cloudName="comparnion" publicId="Aldrin_Apollo_11" width="755" height="450" crop="fill" gravity="auto" />
            <h3>Horizontal Small 365 x 212</h3>
            <Image cloudName="comparnion" publicId="Aldrin_Apollo_11" width="365" height="212" crop="fill" gravity="auto" />
            <h3>Gallery 380 x 380</h3>
            <Image cloudName="comparnion" publicId="Aldrin_Apollo_11" width="380" height="380" crop="fill" gravity="auto" />
        </div>);
    }
}
