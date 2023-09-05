import { Component } from 'react';
import { Layout } from './Layout';
import { Loader } from './Loader';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import { Button } from './Button';
import { fetchPhotos } from 'api';
// import axios from 'axios';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    error: false,
    isShow: false,
    src: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: `${Date.now()}/${evt.target.elements.query.value}`,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleClick = e => {
    const { images } = this.state;
    this.setState({
      isShow: true,
      src: images.find(image => image.id === Number(e.target.id)).largeImageURL,
    });
  };

  onClose = e => {
    this.setState({
      isShow: false,
      src: '',
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      localStorage.setItem('saved-query', JSON.stringify(this.state.query));

      try {
        this.setState({ loading: true, false: false });
        const query = this.state.query.split('/')[1];
        const page = this.state.page;
        const newimages = await fetchPhotos(query, page);

        this.setState({ images: newimages });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { images, loading, src, isShow } = this.state;
    return (
      <Layout>
        <h1> </h1>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} handleClick={this.handleClick} />
        )}
        {isShow && (
          <Modal
            src={src}
            onClose={this.onClose}
            // handleEscPress={this.handleEscPress}
          />
        )}
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
      </Layout>
    );
  }
}
