import React from 'react';
import {useNavigate} from 'react-router-dom';

const PageNotFound = () => {
  const history = useNavigate();

  const goBack = () => {
    history.goBack();
  }
  
  return (
    <main className="page">
      <p>Sorry the page doesn't exist.</p>

      <div className="actions-container">
        <button className="button" onClick={goBack}>
          Go Back
        </button>
      </div>
    </main>
  );
};

export default PageNotFound;