import React, { Component } from 'react';

import ImageGallaryItem from '../ImageGalleryItem';

import s from './ImageGallery.module.css';

class ImageGallary extends Component {
  render() {
    return (
      <ul className={s.ImageGallery}>
        {/* Набор <li> с изображениями */}
        <ImageGallaryItem />
      </ul>
    );
  }
}

export default ImageGallary;
