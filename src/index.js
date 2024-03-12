import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './pages/About'
import CaseStudies from './pages/CaseStudies'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "About",
    element: <AboutPage/>,
  },
  {
    path: "CaseStudies",
    element: <CaseStudies/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

