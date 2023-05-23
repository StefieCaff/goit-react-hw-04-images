import {string, func} from 'prop-types';
import { useEffect } from 'react'

import { Button } from 'components/Button/Button';

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
        <div className="Overlay" onClick={handleBackdropClose}>
            <div className="Modal">
                <Button clickHandler={modalClose} text='close' />
                <img src={largeImageURL} alt={tags} />
            </div>
        </div>
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