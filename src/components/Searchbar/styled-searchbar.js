import styled from 'styled-components';
import Magnify from 'images/search.png';


const StyledInput = styled.input`
    padding: 12px 75px 13px 15px;
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    color:rgba(2, 253, 55, .6);
    background-color: transparent;
    color: black;
    
    border: 3px solid rgba(	1, 198, 253, .8);
    border-radius: 5px;
    transition: background-color 400ms cubic-bezier(0.4, 0, 0.2, 1); 
    &:hover {
        background-color: rgba(	1, 198, 253, .3);
    }
    &:focus {
        color: white;
        outline: none;
        background-color: rgba(	1, 198, 253, .3);
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
        //opacity: 0.6;
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: center;
        background-color: rgba(	1, 198, 253, .7);
        border: 0;
        border-radius: 5px;
        color: white;
        padding: 20px;
        transition: background-color 400ms cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        outline: none;
    &:hover,
    &:focus {
        background-color: rgba(	1, 198, 253, .9);

    }
//    box-shadow: -10px -10px 2px -1px rgba(108,0,85,.5),
//               -10px 10px 2px -1px rgba(	1, 198, 253, .5),
//               10px -10px 2px -1px rgba(253,1,108,.5),
//               10px 10px 2px -1px rgba(199,253,1,.5);
    }
   

`

export {
    StyledForm,
    StyledInput
};