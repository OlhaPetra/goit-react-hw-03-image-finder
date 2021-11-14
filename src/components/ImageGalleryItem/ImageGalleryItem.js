import React from 'react';
import PropTypes from 'prop-types';

import defaultImg from '../../img/default.jpg';
import s from './ImageGalleryItem.module.css';

const ImageGallaryItem = ({ alt, prevImg, largeImg, onClick }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={prevImg ?? defaultImg}
        alt={alt}
        onClick={() => onClick(largeImg, alt)}
      />
    </li>
  );
};

ImageGallaryItem.propTypes = {
  alt: PropTypes.string,
  prevImg: PropTypes.string,
  largeImg: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallaryItem;
