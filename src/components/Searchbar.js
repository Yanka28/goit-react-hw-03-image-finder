import { Component } from 'react';
// import { fetchPhotos } from 'api';

export class Searchbar extends Component {
  state = {
    request: '',
  };

  handleChange = e => {
    this.setState({ request: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    console.log({ ...this.state });
    this.setState({
      request: '',
    });
  };

  render() {
    const { request } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            name="request"
            onChange={this.handleChange}
            // autocomplete="off"
            value={request}
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
