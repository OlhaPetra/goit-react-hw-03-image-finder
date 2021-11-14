import React from 'react';
import PropTypes from 'prop-types';

import ImageGallaryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallary({ images, onClick }) {
  return (
    <ul className={s.ImageGallery}>
      {images.map(image => (
        <ImageGallaryItem
          key={image.id}
          alt={image.tags}
          prevImg={image.webformatURL}
          largeImg={image.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

ImageGallary.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallary;
