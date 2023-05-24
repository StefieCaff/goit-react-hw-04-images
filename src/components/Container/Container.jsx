import { node } from 'prop-types';
import { StyledContainer } from './styled-container';

const Container = ({ children }) => {
    return (
        <StyledContainer>{children}</StyledContainer>
    )
};

Container.propTopes = {
    children: node.isRequired  
};

export { Container };