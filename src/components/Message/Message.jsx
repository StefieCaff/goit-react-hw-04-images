import { node, string } from 'prop-types';

const Message = ({ children, message, className }) => {

    return (
        <div className={className}>
            <span>{message}</span>
            <span>{children}</span>
        </div>
    );
};

Message.defaultProps = {
    message: 'Use the search field to access up to five hundred royalty free images from the '
};

Message.propTypes = {
    children: node,
    message: string,
    className: string
};

export { Message };