/*external imports*/
import { string, func } from 'prop-types';

import { StyledImageCard } from 'components/ImageGalleryItem/styled-image-gallery-item.js';
import { StyledList } from './styled-image-gallery.js';

const ImageGallery = (props) => { const { className, openModal, images} = props;
    
    
     return (
        
        
        <StyledList className={className}>
            <StyledImageCard
                data={images}
                openModal={openModal}
            />
        </StyledList>
    );
};

ImageGallery.propTypes = {
    className: string,
    query: string,
    openModal: func.isRequired,
};

export { ImageGallery };
