import styled from 'styled-components';
import Magnify from 'images/search.png';

const StyledInput = styled.input`
    padding: 15px 75px 14px 15px;
    font-size: 18px;
    font-weight: 600;
    text-transform: lowercase;
    overflow: hidden;
    background-color: transparent;
    color: var(primary-color);
    border: 3px solid var(--primary-accent);
    border-radius: var(--primary-border-radius);
    transition-property: background-color, color; 
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); 
    &:hover {
        background-color: var(--primary-accent-opaque);
        color: var(--secondary-color);
    }
    &:focus {
        color: var(--secondary-color);
        outline: none;
        background-color: var(--primary-accent-opaque);
    }
`

const StyledForm = styled.form`
    div {
        position: relative;
        display: inline-block;    
    }
    button {
        position: absolute;
        right: 7px;
        top: 7px;
        background-image: url(${Magnify});
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: center;
        background-color: var(--primary-accent);
        border: 1px solid transparent;
        border-radius: var(--primary-border-radius);
        padding: 20px;
        transition-property: background-color, border; 
        transition-duration: 400ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        outline: none;
            &:hover,
            &:focus {
                background-color: var(--primary-accent-opaque);
                border: 1px solid var(--primary-accent);
            }
    }
`;

export {
    StyledForm,
    StyledInput
};