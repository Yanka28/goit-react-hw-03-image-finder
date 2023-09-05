import { Overlay, ModalImg } from './Modal.styled';

export const Modal = ({ src, onClose, handleEscPress }) => {
  return (
    // <Overlay onKeyDown={handleEscPress} onClick={onClose}>
    <Overlay onClick={onClose}>
      <ModalImg>
        <img src={src} alt="" />
      </ModalImg>
    </Overlay>
  );
};
