import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ items }) => {
  return (
    <li>
      {items.map(item => (
        <div key={item.id}>
          <ImageGalleryItem photo={item} />
        </div>
      ))}
    </li>
  );
};

{
  /* <ul class="gallery">
  <!-- Набір <li> із зображеннями -->
</ul> */
}
