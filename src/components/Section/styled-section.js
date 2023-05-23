import styled from 'styled-components';
import backgroundD from 'images/pink-magic-d.jpg';

const StyledHero = styled.section`
    width: 100vw;
    padding-top: 75px;
    padding-bottom: 50px;
    background-color: #8e78aa;
    background-image: url(${backgroundD});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledSection = styled.section`
{
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (min-width:1200px) {
    padding-top:94px;
    padding-bottom:94px;
  }
`

export {
    StyledSection,
    StyledHero
};