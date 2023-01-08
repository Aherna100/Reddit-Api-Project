import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import App from './app/App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import "./App.css";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PageNotFound from './features/pageNotFound/PageNotFound';
import HomePage from './features/topic/HomePage';
import Detail from './features/post/Detail';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <PageNotFound />,
  },
  {
    path: "image/:imageId",
    element: <Detail />,
    errorElement: <PageNotFound />
  }
])

root.render(
  // <Provider store={store} router={router}>
  //   <App />
  // </Provider>
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
