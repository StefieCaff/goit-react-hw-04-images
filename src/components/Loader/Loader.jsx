import PuffLoader from "react-spinners/PuffLoader";

import { bool, string } from 'prop-types'

const Loader = ({ loading, className }) => {
  
    return (
        <div className={className}>
            <PuffLoader
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
                color= 'rgba(1, 198, 253)'
            />
        </div>
    );
};

Loader.propTypes = {
    loading: bool.isRequired,
    className: string
};

export { Loader };