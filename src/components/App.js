import { Component } from 'react';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { ColorRing } from 'react-loader-spinner';
import { fetchPhotos } from 'api';
// import axios from 'axios';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    error: false,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: `${Date.now()}/${evt.target.elements.query.value}`,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
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
    const { images, loading } = this.state;
    return (
      <Layout>
        <h1> </h1>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        )}
        {images.length > 0 && <ImageGallery images={images} />}
        <Button onClick={this.handleLoadMore} />
      </Layout>
    );
  }
}
