import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from 'react-icons/fa';
import s from './Searchbar.module.css';

class SearchBar extends Component {
  state = {
    querry: '',
  };

  handleQuerryChange = event => {
    this.setState({ querry: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.querry.trim() === '') {
      toast.error('Enter your request!');
      return;
    }
    this.props.onSubmit(this.state.querry);
    this.setState({ querry: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <FaSearch />
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            name="querry"
            value={this.state.querry}
            onChange={this.handleQuerryChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
