import styled from 'styled-components';

import { Button } from './Button';
import Background from '../../images/pink-magic-b3.jpg';

const StyledButton = styled(Button)`
        padding: 12px 20px;
        font-size: 20px;
        font-weight: 500;

        color: var(--primary-accent); 
        background-image: url(${Background});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border: 3px solid var(--primary-accent);
        border-radius: var(--primary-border-radius);
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14), 
            0px 2px 1px -1px rgba(0, 0, 0, 0.12);
        transition-property: opacity, border; 
        transition-duration: 400ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            &:hover,
            &:focus {
                opacity: .6;
                border: 3px solid black;

            }
`;

export { StyledButton };