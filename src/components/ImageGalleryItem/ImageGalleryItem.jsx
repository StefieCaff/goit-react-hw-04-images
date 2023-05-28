import {string, func, number, PropTypes} from 'prop-types'

const ImageGalleryItem = (props) => {

    const {
        className,
        data,
        openModal
    } = props;

    return data.map(({id, largeImageURL, tags, webformatURL}) => (
        <li className={className} key={id}>
            <img className="ImageGalleryItem-image"
                src={webformatURL}
                alt={tags}
                onClick={() => openModal(largeImageURL)}
                loading="lazy"
            />
        </li>

    ));
};


ImageGalleryItem.defaultProps = {
    largeImageURL: 'https://picsum.photos/100%/260',
    webformatURL: 'https://picsum.photos/100%/260',
}

ImageGalleryItem.propTypes = {
    className: string,
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