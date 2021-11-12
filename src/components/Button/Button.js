import React from 'react';

import s from './Button.module.css';

function Button() {
  return (
    <button type="submit" className={s.Button}>
      Load more
    </button>
  );
}

export default Button;
