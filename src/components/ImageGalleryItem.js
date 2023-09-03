export const ImageGalleryItem = ({ item }) => {
  const { webformatURL, largeImageURL } = item;
  return (
    <li className="gallery-item">
      {
        <a href={largeImageURL}>
          <img src={webformatURL} alt="{tags}" loading="lazy" />
        </a>
      }
    </li>
  );
};
