import React from 'react';
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from '../features/pageNotFound/PageNotFound';
import Navigation from '../features/search/Navigation';
import HomePage from '../features/topic/HomePage';

function App() {
  return (
    <Router>
        {/* <Header/>
        <Navigation />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/post/:id" element={<Detail/>}/>
            <Route to="/404" element={<PageNotFound/>}/>
          </Routes> */}
    </Router>
  );
}

export default App;
