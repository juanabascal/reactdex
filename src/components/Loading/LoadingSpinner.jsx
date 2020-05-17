import React from "react";

const LoadingSpinner = ({ active }) => {
  return (
    <>
      {active && (
        <div className="text-center">
          <div className="spinner-border m-5 text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
