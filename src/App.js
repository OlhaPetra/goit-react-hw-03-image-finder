import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import SearchBar from './components/Searchbar';
import ImageGallary from './components/ImageGallery';
import ImagesApi from './services-api/ImagesAPI';
import Button from './components/Button';
import Modal from './components/Modal';

class App extends Component {
  state = {
    searchQuerry: '',
    pictures: [],
    page: 1,
    showModal: false,
    loading: false,
    modalImage: null,
    firstRequest: true,
  };

  handleSearchFormSubmit = searchQuerry => {
    this.setState({ searchQuerry });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      const { searchQuerry, page } = this.state;

      this.setState({
        loading: true,
      });

      ImagesApi.ImagesFetch(searchQuerry, page)
        .then(
          results => console.log(results),
          /* this.setState(prevState => ({
              pictures: [...prevState.pictures, ...results],
              page: prevState.page + 1,
            })), */
        )
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  openModal = largeImage => {
    this.setState({ modalImage: largeImage });
  };

  closeModal = e => {
    this.setState({ modalImage: null });
  };

  render() {
    const { pictures, loading, modalImage, searchQuerry } = this.state;

    return (
      <>
        <div>
          <SearchBar onSubmit={this.handleSearchFormSubmit} />
          <ImageGallary
            pictures={pictures}
            onClick={this.openModal}
            searchQuerry={searchQuerry}
          />
          {modalImage && (
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
          <ToastContainer />
        </div>
      </>
    );
  }
}

export default App;
