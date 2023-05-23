import { node } from 'prop-types';

const Wrapper = ({ children }) => {
    
    return (
        <div>
            {children}
        </div>
    );
};

Wrapper.propTypes = {
    children: node
}

export { Wrapper }