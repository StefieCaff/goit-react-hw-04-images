import styled from 'styled-components';

import CloseX from '../../images/close-x.png';

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
    
    div {
        position: relative;
        max-width: calc(100vw - 48px);
        max-height: calc(100vh - 24px); 
    }
    button {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 10px;
        color: transparent;
        border-radius: var(--primary-border-radius);
        border: transparent;
        background-image: url(${CloseX});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 10px 5px;
    }
    img {
        padding: 10px;
    }
`;

export { StyledModal };