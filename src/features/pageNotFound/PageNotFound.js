import React from 'react';
import { useRouteError } from 'react-router-dom';

const PageNotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="page">
      <p>Sorry the page doesn't exist.</p>

      <div className="actions-container">
        <button className="button">
          Go Back
        </button>
      </div>
    </main>
  );
};

export default PageNotFound;