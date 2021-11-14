import React from 'react';
import PropTypes from 'prop-types';

import ImageGallaryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallary({ pictures, onClick }) {
  return (
    <ul className={s.ImageGallery}>
      {pictures.map(picture => (
        <ImageGallaryItem
          key={picture.id}
          alt={picture.tags}
          prevImg={picture.webformatURL}
          largeImg={picture.largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

ImageGallary.propTypes = {
  pictures: PropTypes.arrayOf(
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
