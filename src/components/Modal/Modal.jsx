import {string, func} from 'prop-types';
import { useEffect } from 'react'

import { Button } from 'components/Button/Button';
import { StyledModal } from './styled-modal';

const Modal = (props) => {

    const {
        largeImageURL,
        tags,
        modalClose
    } = props;

    const handleBackdropClose = (e) => {
        if (e.target === e.currentTarget) {
            modalClose();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Escape') {
                modalClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [modalClose]);

    return (
        <StyledModal onClick={handleBackdropClose}>
            <div>
                <Button clickHandler={modalClose} text='close' />
                <img src={largeImageURL} alt={tags} />
            </div>
        </StyledModal>
    )
};

Modal.defaultProps = {
    largeImageURL: 'https://picsum.photos/100%/260',
    tags: "This is a default image. I am sorry, the image you searched is not available."
};

Modal.propTypes = {
    largeImageURL: string,
    tags: string,
    modalClose: func
};

export { Modal };