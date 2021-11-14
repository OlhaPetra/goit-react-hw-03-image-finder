import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import SearchBar from './components/Searchbar';
import ImageGallary from './components/ImageGallery';
//import ImagesApi from './services-api/ImagesAPI';
//import Button from './components/Button';
//import Modal from './components/Modal';

const API_KEY = `23556027-7518a6338651e19ee58531f7f`;
const BASE_URL = `https://pixabay.com/api/`;
const perPage = 12;

class App extends Component {
  state = {
    searchQuerry: '',
    images: [],
    page: 1,
    loading: false,
    error: null,

    showModal: false,
    modalImage: null,
    firstRequest: true,
  };

  handleSearchFormSubmit = searchQuerry => {
    this.setState({ searchQuerry });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuerry !== this.state.searchQuerry) {
      this.setState({ loading: true, images: [] });
      setTimeout(() => {
        fetch(
          `${BASE_URL}?q=${this.state.searchQuerry}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
        )
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(new Error('Ошибка на сервере'));
          })
          .then(data => data.hits)
          .then(images => this.setState({ images }))
          .catch(error => this.setState({ error }))
          .finally(this.setState({ loading: false }));
      }, 3000);
    }
  }

  openModal = largeImage => {
    this.setState({ modalImage: largeImage });
  };

  closeModal = e => {
    this.setState({ modalImage: null });
  };

  render() {
    const { images, loading, error, modalImage, searchQuerry } = this.state;

    return (
      <>
        <div>
          <SearchBar onSubmit={this.handleSearchFormSubmit} />
          {error && <h1>{error.message}</h1>}
          {loading && <div>Загружаем</div>}
          {images.length > 0 && (
            <ImageGallary images={images} onClick={this.openModal} />
          )}

          {/* {modalImage && (
            <Modal largeImage={modalImage} onClose={this.closeModal} />
          )}
          {loading && (
            <div>
              <Loader type="Puff" color="#00BFFF" height={80} width={80} />
            </div>
          )}
          {pictures.length > 0 && !loading && (
            <Button onClick={this.imagesRequest} />
          )}
           */}
          <ToastContainer />
        </div>
      </>
    );
  }
}

export default App;
