import styled from 'styled-components';
import Magnify from 'images/search.png';


const StyledInput = styled.input`
    padding: 12px 75px 13px 15px;
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    background-color: transparent;
    color: var(primary-color);
    border: 3px solid var(--primary-accent);
    border-radius: var(--primary-border-radius);
    transition: background-color 400ms cubic-bezier(0.4, 0, 0.2, 1); 
    &:hover {
        background-color: var(--primary-accent-opaque);
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
        right: 6px;
        top: 6px;
        background-image: url(${Magnify});
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: center;
        background-color: var(--primary-accent);
        border: 0;
        border-radius: var(--primary-border-radius);
        padding: 20px;
        transition: background-color 400ms cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        outline: none;
    &:hover,
    &:focus {
        background-color: var(--primary-accent);

    }
//    box-shadow: -10px -10px 2px -1px rgba(108,0,85,.5),
//               -10px 10px 2px -1px var(--primary-accent-opaque),
//               10px -10px 2px -1px rgba(253,1,108,.3),
//               10px 10px 2px -1px rgba(199,253,1,.3);
    }
   

`

export {
    StyledForm,
    StyledInput
};