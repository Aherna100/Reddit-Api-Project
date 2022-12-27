import React from 'react';
import "../App.css";
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from '../features/pageNotFound/PageNotFound';
import Navigation from '../features/search/Navigation';
import HomePage from '../features/topic/HomePage';
import Detail from '../features/post/Detail';

function App() {
  return (
    <Router>
        <Navigation />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/:id" element={<Detail/>}/>
            <Route path="/pageNotFound" element={<PageNotFound/>}/>
          </Routes>
    </Router>
  );
}

export default App;
