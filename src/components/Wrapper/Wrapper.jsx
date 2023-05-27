import { node, string } from 'prop-types';
import styled from 'styled-components';


const Wrapper = ({ className, children }) => {
    
    return (
        <div className={className}>
            {children}
        </div>
    );
};


const FlexWrapper = styled(Wrapper)`
    display: flex;
    justify-content: flex-end;
    margin-right: 15px;

`


Wrapper.propTypes = {
    className: string,
    children: node
}

export { FlexWrapper }