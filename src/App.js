import React, { Component } from 'react';
import { Children } from 'react';

import SearchBar from './components/Searchbar';
import ImageGallary from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/Button';

//import shortid from 'shortid';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ImageGallary>{Children}</ImageGallary>
        <Modal />
        <Button />
      </div>
    );
  }
}

export default App;
