import { node } from 'prop-types';

const Container = ({ children }) => {
    return (
        <div>{children}</div>
    )
};

Container.propTopes = {
    children: node.isRequired  
};

export { Container };