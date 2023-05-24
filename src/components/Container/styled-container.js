import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
  
  @media screen and (min-width:768px) {
    max-width: 768px;
    padding-left: 15px;
  }

  @media screen and (min-width: 1200px) {
     max-width: 1200px;
     padding: 0;
  }
`

export { StyledContainer }