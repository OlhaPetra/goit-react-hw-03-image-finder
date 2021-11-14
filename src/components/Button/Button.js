import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.css';

function Button({ onClickButton }) {
  return (
    <button type="submit" onClick={onClickButton} className={s.Button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
