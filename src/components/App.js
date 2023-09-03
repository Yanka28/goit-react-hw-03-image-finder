import { Component } from 'react';
import { Layout } from './Layout';
import { Searchbar } from './Searchbar';
import { fetchPhotos } from 'api';
// import axios from 'axios';

export class App extends Component {
  state = {
    photos: [],
    query: '',
    page: 1,
    loading: false,
    error: false,
  };

  async componentDidMount() {
    const { query } = this.state;
    console.log(query);
    const savedQuery = localStorage.getItem('saved-query');
    if (savedQuery !== null) {
      this.setState({
        query: JSON.parse(savedQuery),
      });
    }
    try {
      this.setState({ loading: true, error: false });
      const newphotos = await fetchPhotos(query);
      console.log(newphotos);
      this.setState({ photos: newphotos });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      localStorage.setItem('saved-query', JSON.stringify(this.state.query));
    }
  }

  render() {
    const { photos } = this.state;
    console.log(photos);

    return (
      <Layout>
        <h1> </h1>
        <Searchbar onSubmit={this.onSubmit} />
      </Layout>
    );
  }
}