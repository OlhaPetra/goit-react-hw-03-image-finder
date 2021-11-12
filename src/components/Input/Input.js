import React, { Component } from 'react';
import s from './Input.module.css';
import PropTypes from 'prop-types';

class Input extends Component {
  handleChange = e => {
    const { name, value } = e.target;
    this.props.onChange({ value, name });
  };

  render() {
    const { type, labelName, name, value, pattern, title } = this.props;

    return (
      <label className={s.label}>
        {labelName}
        <input
          className={s.input}
          type={type}
          value={value}
          onChange={this.handleChange}
          name={name}
          pattern={pattern}
          title={title}
          required
        />
      </label>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Input;
