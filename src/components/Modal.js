import { Overlay, ModalImg } from './Modal.styled';
import { Component } from 'react';

export class Modal extends Component {
  handleEscape = e => {
    console.log('gvmhgchgc');
    if (e.key === 'Escape') this.props.onClose();
  };
  handleOverlay = e => {
    if (e.currentTarget === e.target) this.props.onClose();
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  render() {
    return (
      <Overlay onClick={this.handleOverlay}>
        <ModalImg>
          <img src={this.props.src} alt="" />
        </ModalImg>
      </Overlay>
    );
  }
}
