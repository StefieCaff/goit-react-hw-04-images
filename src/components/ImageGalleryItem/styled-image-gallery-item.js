import styled from 'styled-components';

import { ImageGalleryItem } from './ImageGalleryItem';

const StyledImageCard = styled(ImageGalleryItem)`
    border-radius: 5px;
    flex-basis: calc((100% - 10px) / 1);

    @media(min-width:768px) {
       flex-basis: calc((100% - 30px) / 2); 
    }
    @media(min-width:1024px) {
       flex-basis: calc((100% - 60px) / 3); 
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--primary-border-radius);
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

        transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
        
        &:hover {
            transform: scale(1.03);
            cursor: zoom-in;
        }
    }
`;
export { StyledImageCard };