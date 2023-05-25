import PuffLoader from "react-spinners/PuffLoader";

const Loader = ({loading, className}) => {
  
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



export {Loader}