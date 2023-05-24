import { node, string } from 'prop-types'

import { StyledMessage } from './styled-message';

const Message = ({ children, message }) => {

    return (
        <StyledMessage>
            <span>{message}</span>
            <span>{children}</span>
        </StyledMessage>
    );
};

Message.defaultProps = {
    message: 'Use the search field to access up to five hundred royalty free images from the '
}

Message.propTypes = {
    children: node,
    message: string
}

export { Message };