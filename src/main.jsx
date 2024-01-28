import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HowItWorks from './HowItWorks.jsx';
import Chatbot from './Chatbot.jsx';
import About from './About.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/how-it-works',
    element: <HowItWorks />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/chatbot',
    element: <Chatbot />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
