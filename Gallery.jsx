import React, {PropTypes} from 'react';
import {Image} from 'cloudinary-react';

export default class Gallery extends React.Component {
  render() {
    return (<div>
        <h1>Image Gallery</h1>
        <Image cloudName="comparnion" publicId="Aldrin_Apollo_11" width="380" height="380" crop="fill" gravity="auto" />
        <Image cloudName="comparnion" publicId="Aldrin_Apollo_11" width="212" height="365" crop="fill" gravity="auto" />
        <Image cloudName="comparnion" publicId="Aldrin_Apollo_11" width="450" height="365" crop="fill" gravity="auto" />
        <Image cloudName="comparnion" publicId="Aldrin_Apollo_11" width="450" height="755" crop="fill" gravity="auto" />
    </div>);
  }
}
