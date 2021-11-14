import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from './components/Searchbar';
import ImageGallary from './components/ImageGallery';
import ImagesApi from './services-api/ImagesAPI';
import Button from './components/Button';
import Modal from './components/Modal';
import s from './App.module.css';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    loading: false,
    error: null,

    modalImage: null,
    modalAlt: null,
  };

  handleSearchFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  searchImages = e => {
    this.setState({ loading: true, images: [], page: 1 });

    setTimeout(() => {
      ImagesApi.ImagesFetch(this.state.searchQuery, this.state.page)
        .then(results => {
          if (results.length > 0) {
            return this.setState({
              images: results,
              page: this.state.page + 1,
            });
          }
          toast.error(
            `No results were found for your query - "${this.state.searchQuery}"!`,
          );
          return;
        })
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }, 100);
  };

  loadMoreImages = e => {
    const { page, searchQuery, images } = this.state;
    const prevImages = images;
    this.setState({ page: page + 1 });

    ImagesApi.ImagesFetch(searchQuery, page)
      .then(results => this.setState({ images: [...prevImages, ...results] }))
      .catch(error => this.setState({ error }))
      .finally(this.setState({ loading: false }));
  };

  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  closeModal = e => {
    this.setState({ modalImage: null });
  };

  openModal = (largeImage, alt) => {
    this.setState({ modalImage: largeImage, modalAlt: alt });
  };

  render() {
    const { images, loading, error, modalImage, modalAlt } = this.state;

    return (
      <>
        <div className={s.App}>
          <SearchBar
            onSubmit={this.handleSearchFormSubmit}
            onClick={this.searchImages}
          />
          {error && <h1>Ошибка на сервере</h1>}
          {loading && (
            <Loader
              type="Oval"
              color="#3f51b5"
              height={80}
              width={80}
              className={s.Loader}
            />
          )}
          {images.length > 0 && (
            <ImageGallary images={images} onClick={this.openModal} />
          )}
          {images.length > 11 && !loading && (
            <Button onClickButton={this.loadMoreImages} />
          )}
          {modalImage && (
            <Modal onClose={this.closeModal}>
              <img src={modalImage} alt={modalAlt} />
            </Modal>
          )}
          <ToastContainer />
        </div>
      </>
    );
  }
}

export default App;
