import { string, func} from 'prop-types'

import { StyledBUtton } from './styled-button';

const Button = props => {

    const {
        text,
        type,
        clickHandler,
    } = props;
    
    return (
        
        <StyledBUtton
            className="Button"
            type={type}
            onClick={clickHandler}
            aria-label={text}
        >{text}
        </StyledBUtton>
    
    )
};

Button.defaultProps = {
    type: "button",
    text: "clickable button"
}

Button.propTypes = {
    type: string,
    clickHandler: func.isRequired,
    text: string
};

export { Button };