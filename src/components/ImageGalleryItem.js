import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, largeImageURL } = image;
  return (
    <Item className="gallery-item">
      {
        <a href={largeImageURL}>
          <Image src={webformatURL} alt="{tags}" loading="lazy" />
        </a>
      }
    </Item>
  );
};
