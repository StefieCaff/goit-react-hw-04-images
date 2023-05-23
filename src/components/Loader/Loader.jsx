import PuffLoader from "react-spinners/PuffLoader";
import { StyledLoader } from "./styled-loader"; 

const Loader = ({loading}) => {
  
    return (
        <StyledLoader>
            <PuffLoader
                loading={loading}
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
                color= 'rgba(1, 198, 253)'
            />
        </StyledLoader>
    );
};

export {Loader}