import styled from 'styled-components';

const StyledMessage = styled.div`
    width: 100vw;
    margin-top: -2px;
    padding: 2px;
    text-align: center;
    color: var(--primary-accent);
    background-color: black;
    
    a{
        display: inline;
        color: var(--primary-accent);
        background-color: none;
        transition-property: background-color, color; 
        transition-duration: 400ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); 
    &:hover,
    &:focus {
        background-color: var(--primary-accent);
        color: var(--secondary-color);
    }

    }
`

export { StyledMessage };