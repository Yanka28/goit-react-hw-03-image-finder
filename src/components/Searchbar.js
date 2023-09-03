import { Header, SearchForm, Button, Span } from './Searchbar.styled';
// import { fetchPhotos } from 'api';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit">
          <Span>Search</Span>
        </Button>
        <input className="input" type="text" name="query" />
      </SearchForm>
    </Header>
  );
};
