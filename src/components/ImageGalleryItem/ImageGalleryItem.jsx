import {string, func, number, PropTypes} from 'prop-types'

import { StyledImageCard } from './styled-image-gallery-item';

const ImageGalleryItem = (props) => {

    const {
        data,
        openModal
    } = props;

    return data.map(({id, largeImageURL, tags, webformatURL}) => (
        <StyledImageCard key={id}>
            <img className="ImageGalleryItem-image"
                src={webformatURL}
                alt={tags}
                //largeImage={ largeImageURL }
                onClick={() => openModal(largeImageURL)}
                loading="lazy"
            />
        </StyledImageCard>

    ));
};


ImageGalleryItem.defaultProps = {
    largeImageURL: 'https://picsum.photos/100%/260',
    webformatURL: 'https://picsum.photos/100%/260',
}

ImageGalleryItem.propTypes = {
    data: PropTypes.arrayOf(
    PropTypes.shape({
      id: number.isRequired,
      webformatURL: string.isRequired,
      largeImageURL: string.isRequired,
      tags: string.isRequired,
    })
    ),
    openModal: func.isRequired
};

export { ImageGalleryItem };