import { Component } from 'react';
import { Layout } from './Layout';
import { Loader } from './Loader';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import { Button } from './Button';
import { fetchPhotos } from 'api';
import { GlobalStyle } from './GlobalStyle';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    error: false,
    isShow: false,
    src: '',
    loadMore: true,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: `${Date.now()}/${evt.target.elements.query.value}`,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleClick = image => {
    this.setState({
      isShow: true,
      src: image.largeImageURL,
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
      try {
        this.setState({ loading: true, false: false });
        const query = this.state.query.split('/')[1];
        const page = this.state.page;
        let newimages = {};
        if (query !== '') newimages = await fetchPhotos(query, page);
        else toast.error('ТАК НЕ СПРАЦЮЄ, ВВЕДИ ЗАПИТ ');
        const { hits, totalHits } = newimages;
        this.setState({
          images: [...prevState.images, ...hits],
          loadMore: this.state.page < Math.ceil(totalHits / 12),
        });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({
          loading: false,
        });
      }
    }
  }

  render() {
    const { images, loading, src, isShow, loadMore } = this.state;
    return (
      <Layout>
        <h1> </h1>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={images} handleClick={this.handleClick} />
        )}
        {isShow && <Modal src={src} onClose={this.onClose} />}
        {images.length > 0 && loadMore && (
          <Button onClick={this.handleLoadMore} />
        )}
        <GlobalStyle />
        <Toaster position="top-center" />
      </Layout>
    );
  }
}
