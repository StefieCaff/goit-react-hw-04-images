import { string, func} from 'prop-types'

const Button = props => {

    const {
        className,
        text,
        type,
        clickHandler,
    } = props;
    
    return (
        
        <button
            className={className}
            type={type}
            onClick={clickHandler}
            aria-label={text}
        >{text}
        </button>
    
    )
};

Button.defaultProps = {
    type: "button",
    text: "clickable button"
}

Button.propTypes = {
    className: string,
    type: string,
    clickHandler: func.isRequired,
    text: string
};

export { Button };