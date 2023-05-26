import styled from 'styled-components';

import { Message } from './Message';

const StyledMessage = styled(Message)`
    width: 100vw;
    margin-top: -2px;
    padding: 3px;
    font-size: 18px;
    text-align: center;
    color: var(--primary-accent);
    background-color: black;
    
    a{
        display: inline;
        padding: 2px;
        font-size: 20px;
        color: var(--primary-accent);
        background-color: none;
        border-radius: 2px;
        transition-property: background-color, color, opacity; 
        transition-duration: 400ms;
        opacity: 1;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); 
    &:hover,
    &:focus {
        background-color: var(--primary-accent);
        color: white;
        opacity: .8;
    }

    }
`;

export { StyledMessage };