import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.css';

function Button({ onClickButton }) {
  return (
    <div className={s.Section}>
      <button type="submit" onClick={onClickButton} className={s.Button}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
