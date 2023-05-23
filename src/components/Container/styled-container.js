import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  

  @media screen and (min-width:768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
     max-width: 1200px;
  }
`

export { StyledContainer }