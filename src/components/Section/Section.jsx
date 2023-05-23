import { node } from 'prop-types'

const Section = ({ children }) => {
    return (
        <section>{children}</section>
    );
};

Section.propTypes = {
    children: node
};

export { Section };