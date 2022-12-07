import React from 'react';
import PageNotFound from '../features/counter/pageNotFound/PageNotFound';
import Navigation from '../features/counter/search/Navigation';
import HomePage from '../features/counter/topic/HomePage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>

        <Navigation />

        <Routes>

          <Route path='/page-not-found' element={<PageNotFound/>} />

          <Route path='/' element={<HomePage/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
