import { node, string } from 'prop-types'

const Section = ({ children, className }) => {
    return (
        <section className={className}>{children}</section>
    );
};

Section.propTypes = {
    children: node,
    className: string
};

export { Section };