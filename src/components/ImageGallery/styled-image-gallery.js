import styled from 'styled-components';

const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0px 20px 10px;

 @media(min-width:768px) {
        margin: 20px 0px;
        gap: 15px; 
    }

     @media(min-width:1024px) {
        margin: 30px 0px;
        gap: 20px; 
    }
`

export {StyledList}