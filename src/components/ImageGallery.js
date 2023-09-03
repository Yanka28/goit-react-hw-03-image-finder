import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <Gallery>
      {images.map(image => (
        <div key={image.id}>{<ImageGalleryItem image={image} />}</div>
      ))}
    </Gallery>
  );
};
